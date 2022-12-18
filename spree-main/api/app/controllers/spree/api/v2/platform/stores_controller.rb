module Spree
  module Api
    module V2
      module Platform
        class StoresController < ResourceController
          private

          def model_class
            Spree::Store
          end


          
        end
      end
    end
  end
end


