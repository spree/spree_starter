# This migration comes from spree_homepage (originally 20190513090730)
class CreateSpreeInstagramSettings < SpreeExtension::Migration[5.2]
  def change
    create_table :spree_instagram_settings do |t|
      t.string :access_token, null: false, default: ''
      t.string :target_account, null: false, default: ''

      t.timestamps
    end
  end
end
