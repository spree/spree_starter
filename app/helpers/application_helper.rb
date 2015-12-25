module ApplicationHelper
  def env_javascript_include_tag(prod_asset, dev_asset, params = {})
    asset_file = !Rails.env.development? ? prod_asset : dev_asset
    return javascript_include_tag(asset_file, params) if asset_file
  end

  def env_stylesheet_link_tag(prod_asset, dev_asset, params = {})
    asset_file = !Rails.env.development? ? prod_asset : dev_asset
    return stylesheet_link_tag(asset_file, params) if asset_file
  end
end
