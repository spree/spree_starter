
module Spree
  class Gateway::HyperPayCardProcessor < Spree::Base
    module HyperPayCardProcessor

      include Gateway::HyperPayApiClient::HyperPayApiClient

      def start_card_registeration
        response = make_checkout_call
        response_json = JSON.parse(response.to_json)
        result = {
          "checkout_id": response_json["id"]
        }
      end


      def complete_card_registeration(payment_method_id,checkout_id, user)
        result = get_registeration(checkout_id)

        result_json = JSON.parse(result.to_json)

        card_response=result_json["card"]

        card={
          "gateway_payment_profile_id": result_json["id"],
          "cc_type": result_json["paymentBrand"].downcase,
          "last_digits": card_response["last4Digits"],
          "month": card_response["expiryMonth"],
          "year": card_response["expiryYear"],
          "name": card_response["holder"]
        }
       
        current = Spree::PaymentMethod.find_by(id: payment_method_id)

        result2 = Wallet::CreatePaymentSource.call(
          payment_method: current,
          params: card,
          user: user
        )

      end


    end
  end
end
