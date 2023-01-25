module Spree
  module Api
    module V2
      module Storefront
        module Account
          class CreditCardsController < ::Spree::Api::V2::ResourceController
            include Gateway::HyperPayCardProcessor::HyperPayCardProcessor
            before_action :require_spree_current_user

            def destroy
              spree_authorize! :destroy, resource, resource

              destroy_service.call(card: resource)
            end


            def start_registeration
              render status: 200, json: start_card_registeration
            end
              
            def complete_registeration
              result=complete_card_registeration(params[:checkout_id],spree_current_user)
              render_result(result)
            end

            private

            def resource
              params[:id].eql?('default') ? scope.default.first! : scope.find(params[:id])
            end

            def model_class
              Spree::CreditCard
            end

            def scope
              super.not_expired.not_removed.where(
                user: spree_current_user,
                payment_method: current_store.payment_methods.available_on_front_end
              )
            end

            def collection_serializer
              Spree::Api::Dependencies.storefront_credit_card_serializer.constantize
            end

            def collection_finder
              Spree::Api::Dependencies.storefront_credit_card_finder.constantize
            end

            def resource_serializer
              Spree::Api::Dependencies.storefront_credit_card_serializer.constantize
            end

            def destroy_service
              Spree::Api::Dependencies.storefront_credit_cards_destroy_service.constantize
            end
          end
        end
      end
    end
  end
end
