Spree::FrontendHelper.module_eval do
  def class_for(flash_type)
    {
      success: 'success',
      error:   'danger',
      alert:   'danger',
      warning: 'warning',
      notice:  'info'
    }[flash_type.to_sym]
  end

  def flash_messages(opts = {})
    flashes = ''

    flash.to_h.except("order_completed").each do |msg_type, text|
      if msg_type.present?
        flashes << content_tag(:div, class: "alert alert-#{class_for(msg_type)}") do
          content_tag(:button, '&times;'.html_safe, class: 'close', data: { dismiss: 'alert', hidden: true }) +
          content_tag(:span, text)
        end
      end
    end
    flashes.html_safe
  end

  def json_products(products = {})
    ActiveModel::SerializableResource.new(products.to_a).serializable_hash
  end
end
