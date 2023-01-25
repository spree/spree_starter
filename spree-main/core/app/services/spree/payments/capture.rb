module Spree
  module Payments
    class Capture
      prepend Spree::ServiceModule::Base
      def call(payment:)
        ApplicationRecord.transaction do
          run :prepare_payment_attributes
        end
      end
      
      protected

      def prepare_payment_attributes(payment:)
        return failure(nil, 'error in payment state') if payment.state  != 'pending'

        capturable_amount = payment.amount
        cents = (capturable_amount * 100).to_i

        result=payment.capture!(cents)
        success(payment.reload)

      end

    end
  end
end
