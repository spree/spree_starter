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

  def json_pagination(object = {})
    {
      current_page: object.current_page,
      next_page: object.next_page,
      prev_page: object.prev_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }.map { |k, v| [ k.to_s.camelize(:lower).chomp('?').to_sym, v ] }.to_h
  end
end
