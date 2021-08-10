# This migration comes from spree_multi_vendor (originally 20190308091546)
class AddPriorityToVendor < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_vendors, :priority, :integer
    Spree::Vendor.order(:updated_at).each.with_index(1) do |vendor, index|
      vendor.update_column :priority, index
    end
  end
end
