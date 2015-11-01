# This migration comes from spree (originally 20140723004419)
class RenameSpreeRefundReturnAuthorizationId < ActiveRecord::Migration
  def change
    rename_column :spree_refunds, :return_authorization_id, :customer_return_id
  end
end
