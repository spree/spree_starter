VCR.configure do |c|
  c.allow_http_connections_when_no_cassette = false
  c.cassette_library_dir = Rails.root.join('spec', 'vcr')
  c.hook_into :webmock
  c.ignore_localhost = true
  c.ignore_hosts 'codeclimate.com'
  c.configure_rspec_metadata!
  c.default_cassette_options = { record: :new_episodes }
end
