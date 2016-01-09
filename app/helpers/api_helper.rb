module ApiHelper
  def json_records(records = {})
    ActiveModel::SerializableResource.new(records.to_a, include: '**').serializable_hash
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
