module Spree
  module Api
    module V2
      module Platform
        class PaymentsController < ResourceController
          include NumberResource

          def capture
            result = capture_service.call(payment: resource)
           
           if result.success?
              render_result(result)
            else
              render_error_payload(result.error)
            end
          end

          
          private

          def model_class
            Spree::Payment
          end

          def capture_service
            Spree::Api::Dependencies.platform_payment_capture_service.constantize
          end

          
        end
      end
    end
  end
end
