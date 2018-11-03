require 'rails_helper'

RSpec.configure do |config|
  config.use_transactional_fixtures = true

  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new app,
      browser: :chrome,
      options: Selenium::WebDriver::Chrome::Options.new(args: %w[headless disable-gpu window-size=1920,1080])
  end

  Capybara.javascript_driver = :chrome
end
