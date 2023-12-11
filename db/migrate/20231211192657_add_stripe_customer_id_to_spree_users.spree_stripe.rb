# This migration comes from spree_stripe (originally 20231124142713)
class AddStripeCustomerIdToSpreeUsers < ActiveRecord::Migration[6.0]
  def change
    if Spree.user_class.present?
      users_table_name = Spree.user_class.table_name
      add_column users_table_name, :stripe_customer_id, :jsonb
    end
  end
end
