# This migration comes from spree_multi_vendor (originally 20170406102944)
class AddVendorIdToSpreeModels < SpreeExtension::Migration[4.2]
  def change
    SpreeMultiVendor.vendorized_models.each do |klass|
      add_reference klass.table_name, :vendor, index: true
    rescue
      message = "Could not add vendor_id column to spree_#{klass}"
      Rails.logger.error message
    end
  end
end
