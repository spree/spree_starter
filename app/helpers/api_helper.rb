module ApiHelper
  def json_records(records = {}, options = {})
    json_serialized(records.to_a, options)
  end

  def json_record(record = {}, options = {})
    json_serialized(record, options)
  end

  def json_serialized(object = {}, options = {})
    options.reverse_merge!(include: '**', scope: spree_current_user, scope_name: :spree_current_user)
    ActiveModel::SerializableResource.new(object, options).serializable_hash
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
