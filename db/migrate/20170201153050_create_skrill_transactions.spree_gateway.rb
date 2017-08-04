# This migration comes from spree_gateway (originally 20111118164631)
class CreateSkrillTransactions < ActiveRecord::Migration[4.2]
  def change
    create_table :spree_skrill_transactions do |t|
      t.string :email
      t.float :amount
      t.string :currency
      t.integer :transaction_id
      t.integer :customer_id
      t.string :payment_type
      t.timestamps null: true
    end
  end
end
