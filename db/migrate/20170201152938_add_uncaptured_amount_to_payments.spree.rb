# This migration comes from spree (originally 20140205144710)
class AddUncapturedAmountToPayments < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_payments, :uncaptured_amount, :decimal, precision: 10, scale: 2, default: 0.0
  end
end
