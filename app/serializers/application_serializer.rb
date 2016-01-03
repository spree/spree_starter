class ApplicationSerializer < ActiveModel::Serializer
  def attributes(options = {})
    super(options).map { |k, v| [ k.to_s.camelize(:lower).chomp('?').to_sym, v ] }.to_h
  end

  def self.has_many(*args)
    options = args.extract_options!
    options.reverse_merge!({ key: args.first.to_s.camelize(:lower).to_sym })
    args << options
    super(*args)
  end

  def self.has_one(*args)
    options = args.extract_options!
    options.reverse_merge!({ key: args.first.to_s.camelize(:lower).to_sym })
    args << options
    super(*args)
  end

  def self.belongs_to(*args)
    options = args.extract_options!
    options.reverse_merge!({ key: args.first.to_s.camelize(:lower).to_sym })
    args << options
    super(*args)
  end
end
