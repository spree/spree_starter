if defined?(Warden)
  include Warden::Test::Helpers
  Warden.test_mode!
end

if defined?(Devise)
  RSpec.configure do |config|
    config.include Devise::Test::ControllerHelpers, type: :controller
    config.include Devise::Test::IntegrationHelpers, type: :feature
    config.include Devise::Test::IntegrationHelpers, type: :request

    config.include Warden::Test::Helpers
    config.before :suite do
      Warden.test_mode!
    end
  end
end
