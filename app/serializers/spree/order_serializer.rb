module Spree
  class OrderSerializer < ApplicationSerializer
    attributes :id, :total, :currency, :guest_token, :user_id

    has_many :line_items
    has_many :adjustments
  end
end
