
module Spree
  class Gateway::HyperPayApiClient < Spree::Base
    module HyperPayApiClient


      def make_checkout_call
        uri = URI('https://test.oppwa.com/v1/checkouts')
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        req = Net::HTTP::Post.new(uri.path)
        req.set_form_data({
          'entityId' => $CONF[:hyper_pay_entityId],
          'createRegistration' => true
          })
        req["Authorization"] = "Bearer " + $CONF[:hyper_pay_token]
        res = http.request(req)
        
        raise Core::GatewayError, 'could not complete get new checkout id for card registeration ' unless res.code == '200'
        
        JSON.parse(res.body)
      end


      def get_registeration(checkout_id)
        uri = URI('https://test.oppwa.com/v1/checkouts/' + checkout_id + '/registration')
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        req = Net::HTTP::Get.new(uri.path)
        params = {'entityId'=>$CONF[:hyper_pay_entityId]}
        req.set_form_data( params )
           
        req = Net::HTTP::Get.new( uri.path+ '?' + req.body ) 
        req["Authorization"] = "Bearer " + $CONF[:hyper_pay_token]
        
        res = http.request(req)
        raise Core::GatewayError, 'could not complete registeration of checkout id ' + checkout_id unless res.code == '200'
        JSON.parse(res.body)
      end


      def authorize_payment(card_registeration_id, amount)
        uri = URI('https://test.oppwa.com/v1/registrations/'+ card_registeration_id+'/payments')
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        req = Net::HTTP::Post.new(uri.path)
        req.set_form_data({
          'entityId' => $CONF[:hyper_pay_entityId],
          'amount' => amount,
          'currency' => 'SAR',
          'paymentType' => 'PA',
          'shopperResultUrl' => 'google.com'
          })
        req["Authorization"] = "Bearer " + $CONF[:hyper_pay_token]
        res = http.request(req)

        raise Core::GatewayError, 'could not authorize request ' + card_registeration_id unless res.code == '200'
        JSON.parse(res.body)
      end




      def capture_payment(payment_process_id, amount)
        uri = URI('https://test.oppwa.com/v1/payments/'+ payment_process_id)
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        req = Net::HTTP::Post.new(uri.path)
        req.set_form_data({
          'entityId' => $CONF[:hyper_pay_entityId],
          'amount' => amount,
          'currency' => 'SAR',
          'paymentType' => 'CP'
          })
        req["Authorization"] = "Bearer " + $CONF[:hyper_pay_token]

        res = http.request(req)

        raise Core::GatewayError, 'could not capture money with paymetn process id of ' + payment_process_id unless res.code == '200'

        JSON.parse(res.body)
      end


    end
  end
end
