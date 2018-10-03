class SentryJob < ApplicationJob
  queue_as :sentry

  def perform(event)
    Raven.send_event(event)
  end
end
