RSpec.configure do |config|
  config.include(RSpec::ActiveJob)

  # clean out the queue after each spec
  config.after(:each) do
    ActiveJob::Base.queue_adapter.enqueued_jobs = []
    ActiveJob::Base.queue_adapter.performed_jobs = []
  end
end
