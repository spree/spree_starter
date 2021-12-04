#
# Place all seeds in /seeds/ folder.
#

Spree::Webhooks.disable_webhooks do
  Dir[File.dirname(__FILE__) + '/seeds/*.rb'].sort.each do |file|
    puts "Seeds #{file} ..."
    require file
  end
end
