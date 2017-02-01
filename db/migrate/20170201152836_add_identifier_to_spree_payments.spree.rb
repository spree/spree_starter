# This migration comes from spree (originally 20130203232234)
class AddIdentifierToSpreePayments < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_payments, :identifier, :string
  end
end
