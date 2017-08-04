# This migration comes from spree_auth (originally 20120203010234)
class AddResetPasswordSentAtToSpreeUsers < ActiveRecord::Migration[4.2]
  def change
    Spree::User.reset_column_information
    unless Spree::User.column_names.include?("reset_password_sent_at")
      add_column :spree_users, :reset_password_sent_at, :datetime
    end
  end
end
