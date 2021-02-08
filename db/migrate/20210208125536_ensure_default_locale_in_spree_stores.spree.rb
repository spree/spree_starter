# This migration comes from spree (originally 20210120142527)
class EnsureDefaultLocaleInSpreeStores < ActiveRecord::Migration[6.0]
  def change
    Spree::Store.where(default_locale: nil).update_all(default_locale: I18n.locale)
  end
end
