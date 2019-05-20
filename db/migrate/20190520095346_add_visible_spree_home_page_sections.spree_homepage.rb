# This migration comes from spree_homepage (originally 20190516105319)
class AddVisibleSpreeHomePageSections < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_home_page_sections, :visible, :boolean, default: true
    add_column :spree_home_page_sections, :mobile_visible, :boolean, default: true
  end
end
