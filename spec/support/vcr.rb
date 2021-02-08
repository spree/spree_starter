require 'vcr'
require 'webmock/rspec'
require 'uri'
require 'webdrivers'

driver_hosts = Webdrivers::Common.subclasses.map { |driver| URI(driver.base_url).host }
driver_hosts << 'codeclimate.com'
driver_urls = Webdrivers::Common.subclasses.map(&:base_url)

WebMock.disable_net_connect!(allow_localhost: true, allow: driver_urls)

VCR.configure do |c|
  c.allow_http_connections_when_no_cassette = false
  c.cassette_library_dir = Rails.root.join('spec', 'vcr')
  c.hook_into :webmock
  c.ignore_localhost = true
  c.ignore_hosts(*driver_hosts)
  c.configure_rspec_metadata!
  c.default_cassette_options = { record: :new_episodes }
end
