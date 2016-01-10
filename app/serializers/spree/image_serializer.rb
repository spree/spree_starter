module Spree
  class ImageSerializer < ApplicationSerializer
    attributes :id, :viewable_type, :viewable_id, :url

    def url
      object.attachment.url
    end
  end
end
