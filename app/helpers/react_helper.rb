module ReactHelper
  def default_react_props(new_props = {})
    default_react_props = { location: request.fullpath, currency: current_currency }
    default_react_props.merge!(new_props)
  end

  def default_react_opts(new_opts = {})
    default_react_opts = { prerender: false }
    default_react_opts.merge!(new_opts)
  end
end
