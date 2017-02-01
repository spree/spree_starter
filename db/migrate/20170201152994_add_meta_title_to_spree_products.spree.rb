# This migration comes from spree (originally 20140827170513)
class AddMetaTitleToSpreeProducts < ActiveRecord::Migration[4.2]
  def change
    change_table :spree_products do |t|
      t.string   :meta_title
    end
  end
end
