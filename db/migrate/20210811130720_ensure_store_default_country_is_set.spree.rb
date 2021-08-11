# This migration comes from spree (originally 20210608045519)
class EnsureStoreDefaultCountryIsSet < ActiveRecord::Migration[5.2]
  def change
    Spree::Store.find_each(&:save)
  end
end
