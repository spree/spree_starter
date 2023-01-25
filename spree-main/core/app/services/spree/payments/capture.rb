module Spree
  module Payments
    class Capture
      prepend Spree::ServiceModule::Base
      def call(payment:)
        ApplicationRecord.transaction do
          run :capture_payment
        end
      end
      
      protected

      def capture_payment(payment:)
        return failure(nil, 'error in payment state') if payment.state  != 'pending'

        capturable_amount = payment.amount
        cents = (capturable_amount * 100).to_i

        begin
          result=payment.capture!(cents)
          success(payment.reload)
        rescue Spree::Core::GatewayError => e
          return failure(nil, 'could not perform capture operation, payment move to failure state')
        end        

      end

    end
  end
end
