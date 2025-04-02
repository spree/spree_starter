module Spree
  module TestingSupport
    module ApiHelpers
      def json_response
        case body = JSON.parse(response.body)
        when Hash
          body.with_indifferent_access
        when Array
          body
        end
      end
    end
  end
end
