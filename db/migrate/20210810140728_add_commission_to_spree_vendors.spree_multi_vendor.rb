# This migration comes from spree_multi_vendor (originally 20190305120337)
class AddCommissionToSpreeVendors < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_vendors, :commission_rate, :float, default: '5.0'
  end
end
