# This migration comes from spree (originally 20141218025915)
class RenameIdentifierToNumberForPayment < ActiveRecord::Migration[4.2]
  def change
    rename_column :spree_payments, :identifier, :number
  end
end
