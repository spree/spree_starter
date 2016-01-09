module Spree
  class ImageSerializer < ApplicationSerializer
    attributes :id, :viewable_type, :viewable_id
  end
end
