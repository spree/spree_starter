# This migration comes from spree_gateway (originally 20200317135551)
class AddSpreeCheckPaymentSource < ActiveRecord::Migration[5.1]
  def change
    create_table :spree_checks do |t|
      t.references :payment_method
      t.references :user
      t.string "account_holder_name"
      t.string "account_holder_type"
      t.string "routing_number"
      t.string "account_number"
      t.string "account_type", default: 'checking'
      t.string "status"
      t.string "last_digits"
      t.string "gateway_customer_profile_id"
      t.string "gateway_payment_profile_id"

      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.datetime "deleted_at"
    end
    add_index :spree_payment_methods, :id
  end
end
