# This migration comes from spree (originally 20230110142344)
class BackfillFriendlyIdSlugLocale < ActiveRecord::Migration[6.1]
  def up
    FriendlyId::Slug.unscoped.update_all(locale: Spree::Store.default.default_locale)
  end

  def down
    FriendlyId::Slug.unscoped.update_all(locale: nil)
  end
end
