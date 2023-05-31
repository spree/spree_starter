# This migration comes from spree_api (originally 20230116205000)
class ChangeSecretKeyToNonNullColumn < ActiveRecord::Migration[6.1]
  def change
    change_column_null :spree_webhooks_subscribers, :secret_key, false
  end
end
