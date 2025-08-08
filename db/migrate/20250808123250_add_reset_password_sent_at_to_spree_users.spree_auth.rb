# This migration comes from spree_auth (originally 20120203010234)
class AddResetPasswordSentAtToSpreeUsers < SpreeExtension::Migration[4.2]
  def change
    Spree.user_class.reset_column_information
    unless Spree.user_class.column_names.include?("reset_password_sent_at")
      add_column :spree_users, :reset_password_sent_at, :datetime
    end
  end
end
