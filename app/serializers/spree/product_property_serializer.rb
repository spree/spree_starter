module Spree
  class ProductPropertySerializer < ApplicationSerializer
    attributes :id, :value, :name

    def name
      object.property.try(:presentation)
    end
  end
end
