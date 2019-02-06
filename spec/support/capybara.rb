# capybara-screenshot
Capybara.save_path = ENV.fetch('CIRCLE_ARTIFACTS', Rails.root.join('tmp/capybara')).to_s
Capybara::Screenshot.prune_strategy = { keep: 20 }

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new app,
    browser: :chrome,
    options: Selenium::WebDriver::Chrome::Options.new(args: %w[headless disable-gpu window-size=1920,1080])
end

Capybara.javascript_driver = :chrome
