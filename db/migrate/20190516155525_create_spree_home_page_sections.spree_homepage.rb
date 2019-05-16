# This migration comes from spree_homepage (originally 20190514120050)
class CreateSpreeHomePageSections < ActiveRecord::Migration[5.2]
  def change
    create_table :spree_home_page_sections do |t|
      t.string :title, null: false, default: ''
      t.string :description, null: false, default: ''
      t.string :name, null: false, default: ''

      t.timestamps
    end
  end
end
