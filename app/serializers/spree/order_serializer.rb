module Spree
  class OrderSerializer < ActiveModel::Serializer
    attributes :id, :total
  end
end
