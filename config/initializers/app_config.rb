class ConfigurationFileNotFound < RuntimeError ; end

$CONF = begin
  YAML.load_file(Rails.root.join('config', 'application.yml'))[Rails.env].symbolize_keys
rescue Errno::ENOENT => e
  raise ConfigurationFileNotFound, 'config/application.yml was not found. You can find an example of it in config/application.yml-example'
end
