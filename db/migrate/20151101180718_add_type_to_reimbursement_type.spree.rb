# This migration comes from spree (originally 20140806144901)
class AddTypeToReimbursementType < ActiveRecord::Migration
  def change
    add_column :spree_reimbursement_types, :type, :string
    add_index :spree_reimbursement_types, :type

    Spree::ReimbursementType.reset_column_information
    Spree::ReimbursementType.find_by(name: Spree::ReimbursementType::ORIGINAL).update_attributes!(type: 'Spree::ReimbursementType::OriginalPayment')
  end
end
