module Spree
  class ProductSerializer < ApplicationSerializer
    attributes :id, :slug, :name, :price, :image_url

    def image_url
      if object.images.first.try(:attachment).present?
        object.images.first.attachment.url(:small)
      else
        ActionController::Base.helpers.asset_url('noimage/product.png')
      end
    end
  end
end
