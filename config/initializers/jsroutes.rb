if defined?(JsRoutes)
  JsRoutes.setup do |config|
    config.exclude = /admin/
  end
end
