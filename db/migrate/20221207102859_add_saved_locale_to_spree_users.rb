class AddSavedLocaleToSpreeUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :spree_users, :saved_locale, :string
  end
end
