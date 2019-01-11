# This migration comes from spree_multi_vendor (originally 20170406102944)
class AddVendorIdToSpreeModels < SpreeExtension::Migration[4.2]
  def change
    table_names = %w[
      option_types
      properties
      products
      stock_locations
      shipping_methods
      variants
    ]

    table_names.each do |table_name|
      add_reference "spree_#{table_name}", :vendor, index: true
    end
  end
end
