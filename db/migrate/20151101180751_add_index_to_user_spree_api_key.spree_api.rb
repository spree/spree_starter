# This migration comes from spree_api (originally 20131017162334)
class AddIndexToUserSpreeApiKey < ActiveRecord::Migration
  def change
    unless defined?(User)
      add_index :spree_users, :spree_api_key
    end
  end
end
