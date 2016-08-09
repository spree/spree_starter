require 'spree/testing_support/factories'

Dir[Rails.root.join('spec/factories/spree/**/*.rb')].each do |factory|
  require factory if factory =~ /decorator/
end
