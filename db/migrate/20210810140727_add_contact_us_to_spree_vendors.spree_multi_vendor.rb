# This migration comes from spree_multi_vendor (originally 20190214142526)
class AddContactUsToSpreeVendors < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_vendors, :contact_us, :text
  end
end
