# This migration comes from spree (originally 20140604135309)
class DropCreditCardFirstNameAndLastName < ActiveRecord::Migration
  def change
    remove_column :spree_credit_cards, :first_name, :string
    remove_column :spree_credit_cards, :last_name, :string
  end
end
