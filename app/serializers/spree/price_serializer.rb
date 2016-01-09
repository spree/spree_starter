module Spree
  class PriceSerializer < ApplicationSerializer
    attributes :id, :variant_id, :amount, :currency
  end
end
