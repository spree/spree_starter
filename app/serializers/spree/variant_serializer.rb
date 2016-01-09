module Spree
  class VariantSerializer < ApplicationSerializer
    attributes :id, :is_master, :sku, :weight, :height, :width, :depth, :stock_items_count, :backorderable?

    def backorderable?
      object.stock_items.any?(&:backorderable)
    end

    has_many :prices
  end
end
