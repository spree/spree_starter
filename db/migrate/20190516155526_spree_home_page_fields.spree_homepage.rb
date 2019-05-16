# This migration comes from spree_homepage (originally 20190514120303)
class SpreeHomePageFields < ActiveRecord::Migration[5.2]
  def change
    create_table :spree_home_page_fields do |t|
      t.string :title, null: false, default: ''
      t.string :description, null: false, default: ''
      t.string :name, null: false, default: ''
      t.string :field_type, null: false, default: ''
      t.references :home_page_section, null: false

      t.timestamps
    end
  end
end
