# This migration comes from spree_multi_domain (originally 20100227180338)
class CreateProductsStores < SpreeExtension::Migration[4.2]
  def self.up
    create_table :products_stores, :id => false do |t|
      t.references :product
      t.references :store
      t.timestamps null: false
    end

    default_store_id = Spree::Store.default.id
    prepared_values = Spree::Product.with_deleted.order(:id).ids.map { |id| "(#{id}, #{default_store_id}, '#{Time.current.to_s(:db)}', '#{Time.current.to_s(:db)}')" }.join(', ')
    return if prepared_values.empty?

    execute "INSERT INTO products_stores (product_id, store_id, created_at, updated_at) VALUES #{prepared_values};"
  end

  def self.down
    drop_table :products_stores
  end
end
