# This migration comes from spree_multi_vendor (originally 20190212161426)
class AddSlugToSpreeVendors < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_vendors, :slug, :string
    add_index :spree_vendors, :slug, unique: true
  end
end
