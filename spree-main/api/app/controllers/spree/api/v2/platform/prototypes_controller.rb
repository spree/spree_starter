module Spree
  module Api
    module V2
      module Platform
        class PrototypesController < ResourceController
          private

          def model_class
            Spree::Prototype
          end


          def scope_includes
            [:option_types,:taxons,:properties]
          end


          
        end
      end
    end
  end
end


