# This migration comes from spree_homepage (originally 20190516140338)
class AddPostionToSpreeHomePageSections < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_home_page_sections, :position, :integer, default: 0
    add_index :spree_home_page_sections, :position
  end
end
