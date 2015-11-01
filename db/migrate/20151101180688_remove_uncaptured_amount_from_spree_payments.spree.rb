# This migration comes from spree (originally 20140616202624)
class RemoveUncapturedAmountFromSpreePayments < ActiveRecord::Migration
  def change
    remove_column :spree_payments, :uncaptured_amount
  end
end
