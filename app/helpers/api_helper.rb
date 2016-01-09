module ApiHelper
  def json_records(records = {})
    json_serialized(records.to_a)
  end

  def json_record(record = {})
    json_serialized(record)
  end

  def json_serialized(object = {})
    ActiveModel::SerializableResource.new(object, include: '**').serializable_hash
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
