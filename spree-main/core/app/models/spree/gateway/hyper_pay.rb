module Spree
  class Gateway::HyperPay < Gateway
    TEST_VISA = ['4111111111111111', '4012888888881881', '4222222222222']
    TEST_MC   = ['5500000000000004', '5555555555554444', '5105105105105100', '2223000010309703']
    TEST_AMEX = ['378282246310005', '371449635398431', '378734493671000', '340000000000009']
    TEST_DISC = ['6011000000000004', '6011111111111117', '6011000990139424']


    include Gateway::HyperPayApiClient::HyperPayApiClient
    VALID_CCS = ['1', TEST_VISA, TEST_MC, TEST_AMEX, TEST_DISC].flatten

    attr_accessor :test

    preference :dummy_key, :string, default: 'PUBLICKEY123'

    def provider_class
      self.class
    end

    def create_profile(payment)

      return if payment.source.has_payment_profile?

      # simulate the storage of credit card profile using remote service
      if success = VALID_CCS.include?(payment.source.number)
        payment.source.update(gateway_customer_profile_id: generate_profile_id(success))
      end
    end

    def authorize(_money, credit_card, _options = {})
      begin
        response=authorize_payment(credit_card.gateway_payment_profile_id, _money/100.0)
        response_json = JSON.parse(response.to_json)
        ActiveMerchant::Billing::Response.new(true, 'Hyper pay Gateway: Authorization success', {}, test: true, authorization: response_json["id"], avs_result: { code: 'D' })
      rescue Spree::Core::GatewayError => e
        ActiveMerchant::Billing::Response.new(false, 'Hyper pay Gateway: Authorization Failure ' + e.message, error: 'Hyper pay: failed to authorize payment', test: true)
      end
    end



    def purchase(_money, credit_card, _options = {})

      profile_id = credit_card.gateway_customer_profile_id
      if VALID_CCS.include?(credit_card.number) || (profile_id&.starts_with?('BGS-'))
        ActiveMerchant::Billing::Response.new(true, 'Bogus Gateway: Forced success', {}, test: true, authorization: '12345', avs_result: { code: 'M' })
      else
        ActiveMerchant::Billing::Response.new(false, 'Bogus Gateway: Forced failure', message: 'Bogus Gateway: Forced failure', test: true)
      end
    end

    def credit(_money, _credit_card, _response_code, _options = {})

      ActiveMerchant::Billing::Response.new(true, 'Bogus Gateway: Forced success', {}, test: true, authorization: '12345')
    end

    def capture(_money, authorization, _gateway_options)
      begin
        response=capture_payment(authorization, _money/100.0)
        ActiveMerchant::Billing::Response.new(true, 'Hyper pay Gateway: Capturing success', {}, test: true)
      rescue Spree::Core::GatewayError => e
        ActiveMerchant::Billing::Response.new(false, 'Hyper pay Gateway: Capturing failure' + e.message, {}, test: true)
      end
    end

    def void(_response_code, _credit_card, _options = {})

      ActiveMerchant::Billing::Response.new(true, 'Bogus Gateway: Forced success', {}, test: true, authorization: '12345')
    end

    def cancel(_response_code, _payment = nil)

      ActiveMerchant::Billing::Response.new(true, 'Bogus Gateway: Forced success', {}, test: true, authorization: '12345')
    end

    def test?

      # Test mode is not really relevant with bogus gateway (no such thing as live server)
      true
    end

    def payment_profiles_supported?

      true
    end

    def payment_source_class

      CreditCard
    end

    def actions

      %w(capture void credit)
    end


    private

    def generate_profile_id(success)

      record = true
      prefix = success ? 'BGS' : 'FAIL'
      while record
        random = "#{prefix}-#{Array.new(6) { rand(6) }.join}"
        record = CreditCard.find_by(gateway_customer_profile_id: random)
      end
      random
    end

    def public_preference_keys
      [:dummy_key]
    end
  end
end
