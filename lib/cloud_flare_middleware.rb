# CloudFlare masks the true IP
# This middleware ensures the Rails stack obtains the correct IP when using request.remote_ip
# See https://support.cloudflare.com/hc/en-us/articles/200170786

module Rack
  class CloudFlareMiddleware
    def initialize(app)
      @app = app
    end

    def call(env)
      if env['HTTP_CF_CONNECTING_IP']
        env['HTTP_REMOTE_ADDR_BEFORE_CF'] = env['REMOTE_ADDR']
        env['HTTP_X_FORWARDED_FOR_BEFORE_CF'] = env['HTTP_X_FORWARDED_FOR']
        env['REMOTE_ADDR'] = env['HTTP_CF_CONNECTING_IP']
        env['HTTP_X_FORWARDED_FOR'] = env['HTTP_CF_CONNECTING_IP']
      end
      @app.call(env)
    end
  end
end
