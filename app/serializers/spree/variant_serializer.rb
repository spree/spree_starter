module Spree
  class VariantSerializer < ApplicationSerializer
    attributes :id, :is_master, :name, :options_text, :sku, :weight, :height, :width, :depth, :stock_items_count
    attribute :backorderable?, key: :backorderable

    def backorderable?
      object.stock_items.any?(&:backorderable)
    end

    has_many :prices
    has_many :images
  end
end
