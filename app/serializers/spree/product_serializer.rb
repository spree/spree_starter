module Spree
  class ProductSerializer < ApplicationSerializer
    attributes :id, :slug, :name

    has_one :master
    has_many :images
    has_many :variants
    has_many :product_properties
  end
end
