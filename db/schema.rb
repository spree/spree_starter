# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_05_29_102145) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "action_mailbox_inbound_emails", force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "message_id", null: false
    t.string "message_checksum", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id", "message_checksum"], name: "index_action_mailbox_inbound_emails_uniqueness", unique: true
  end

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "locale", default: "en", null: false
    t.index ["record_type", "record_id", "name", "locale"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "action_text_video_embeds", force: :cascade do |t|
    t.string "url", null: false
    t.string "thumbnail_url", null: false
    t.text "raw_html", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.bigint "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at", precision: nil
    t.datetime "deleted_at", precision: nil
    t.string "locale"
    t.index ["deleted_at"], name: "index_friendly_id_slugs_on_deleted_at"
    t.index ["locale"], name: "index_friendly_id_slugs_on_locale"
    t.index ["slug", "sluggable_type", "locale"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_locale"
    t.index ["slug", "sluggable_type", "scope", "locale"], name: "index_friendly_id_slugs_unique", unique: true
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "spree_addresses", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "zipcode"
    t.string "phone"
    t.string "state_name"
    t.string "alternative_phone"
    t.string "company"
    t.bigint "state_id"
    t.bigint "country_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.datetime "deleted_at", precision: nil
    t.string "label"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.boolean "quick_checkout", default: false
    t.decimal "latitude"
    t.decimal "longitude"
    t.index ["country_id"], name: "index_spree_addresses_on_country_id"
    t.index ["deleted_at"], name: "index_spree_addresses_on_deleted_at"
    t.index ["firstname"], name: "index_addresses_on_firstname"
    t.index ["lastname"], name: "index_addresses_on_lastname"
    t.index ["quick_checkout"], name: "index_spree_addresses_on_quick_checkout"
    t.index ["state_id"], name: "index_spree_addresses_on_state_id"
    t.index ["user_id"], name: "index_spree_addresses_on_user_id"
  end

  create_table "spree_adjustments", force: :cascade do |t|
    t.string "source_type"
    t.bigint "source_id"
    t.string "adjustable_type"
    t.bigint "adjustable_id"
    t.decimal "amount", precision: 10, scale: 2
    t.string "label"
    t.boolean "mandatory"
    t.boolean "eligible", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "state"
    t.bigint "order_id", null: false
    t.boolean "included", default: false
    t.index ["adjustable_id", "adjustable_type"], name: "index_spree_adjustments_on_adjustable_id_and_adjustable_type"
    t.index ["eligible"], name: "index_spree_adjustments_on_eligible"
    t.index ["order_id"], name: "index_spree_adjustments_on_order_id"
    t.index ["source_id", "source_type"], name: "index_spree_adjustments_on_source_id_and_source_type"
  end

  create_table "spree_assets", force: :cascade do |t|
    t.string "viewable_type"
    t.bigint "viewable_id"
    t.integer "attachment_width"
    t.integer "attachment_height"
    t.integer "attachment_file_size"
    t.integer "position"
    t.string "attachment_content_type"
    t.string "attachment_file_name"
    t.string "type", limit: 75
    t.datetime "attachment_updated_at", precision: nil
    t.text "alt"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "session_id"
    t.index ["position"], name: "index_spree_assets_on_position"
    t.index ["viewable_id"], name: "index_assets_on_viewable_id"
    t.index ["viewable_type", "type"], name: "index_assets_on_viewable_type_and_type"
  end

  create_table "spree_calculators", force: :cascade do |t|
    t.string "type"
    t.string "calculable_type"
    t.bigint "calculable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "preferences"
    t.datetime "deleted_at", precision: nil
    t.index ["calculable_id", "calculable_type"], name: "index_spree_calculators_on_calculable_id_and_calculable_type"
    t.index ["deleted_at"], name: "index_spree_calculators_on_deleted_at"
    t.index ["id", "type"], name: "index_spree_calculators_on_id_and_type"
  end

  create_table "spree_countries", force: :cascade do |t|
    t.string "iso_name"
    t.string "iso", null: false
    t.string "iso3", null: false
    t.string "name"
    t.integer "numcode"
    t.boolean "states_required", default: false
    t.datetime "updated_at", precision: nil
    t.boolean "zipcode_required", default: true
    t.datetime "created_at", precision: nil
    t.index ["iso"], name: "index_spree_countries_on_iso", unique: true
    t.index ["iso3"], name: "index_spree_countries_on_iso3", unique: true
    t.index ["iso_name"], name: "index_spree_countries_on_iso_name", unique: true
    t.index ["name"], name: "index_spree_countries_on_name", unique: true
  end

  create_table "spree_coupon_codes", force: :cascade do |t|
    t.string "code"
    t.bigint "promotion_id"
    t.bigint "order_id"
    t.integer "state", default: 0, null: false
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["code"], name: "index_spree_coupon_codes_on_code", unique: true, where: "(deleted_at IS NULL)"
    t.index ["deleted_at"], name: "index_spree_coupon_codes_on_deleted_at"
    t.index ["order_id"], name: "index_spree_coupon_codes_on_order_id"
    t.index ["promotion_id"], name: "index_spree_coupon_codes_on_promotion_id"
    t.index ["state"], name: "index_spree_coupon_codes_on_state"
  end

  create_table "spree_credit_cards", force: :cascade do |t|
    t.string "month"
    t.string "year"
    t.string "cc_type"
    t.string "last_digits"
    t.bigint "address_id"
    t.string "gateway_customer_profile_id"
    t.string "gateway_payment_profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.bigint "user_id"
    t.bigint "payment_method_id"
    t.boolean "default", default: false, null: false
    t.datetime "deleted_at", precision: nil
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.bigint "gateway_customer_id"
    t.index ["address_id"], name: "index_spree_credit_cards_on_address_id"
    t.index ["deleted_at"], name: "index_spree_credit_cards_on_deleted_at"
    t.index ["gateway_customer_id"], name: "index_spree_credit_cards_on_gateway_customer_id"
    t.index ["payment_method_id"], name: "index_spree_credit_cards_on_payment_method_id"
    t.index ["user_id"], name: "index_spree_credit_cards_on_user_id"
  end

  create_table "spree_custom_domains", force: :cascade do |t|
    t.bigint "store_id", null: false
    t.string "url", null: false
    t.boolean "status", default: false
    t.boolean "default", default: false, null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["store_id"], name: "index_spree_custom_domains_on_store_id"
    t.index ["url"], name: "index_spree_custom_domains_on_url", unique: true
  end

  create_table "spree_customer_returns", force: :cascade do |t|
    t.string "number"
    t.bigint "stock_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "store_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["number"], name: "index_spree_customer_returns_on_number", unique: true
    t.index ["stock_location_id"], name: "index_spree_customer_returns_on_stock_location_id"
    t.index ["store_id"], name: "index_spree_customer_returns_on_store_id"
  end

  create_table "spree_data_feeds", force: :cascade do |t|
    t.bigint "store_id"
    t.string "name"
    t.string "type"
    t.string "slug"
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["store_id", "slug", "type"], name: "index_spree_data_feeds_on_store_id_and_slug_and_type"
    t.index ["store_id"], name: "index_spree_data_feeds_on_store_id"
  end

  create_table "spree_digital_links", force: :cascade do |t|
    t.bigint "digital_id"
    t.bigint "line_item_id"
    t.string "token"
    t.integer "access_counter"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["digital_id"], name: "index_spree_digital_links_on_digital_id"
    t.index ["line_item_id"], name: "index_spree_digital_links_on_line_item_id"
    t.index ["token"], name: "index_spree_digital_links_on_token", unique: true
  end

  create_table "spree_digitals", force: :cascade do |t|
    t.bigint "variant_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["variant_id"], name: "index_spree_digitals_on_variant_id"
  end

  create_table "spree_exports", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "store_id", null: false
    t.string "number", limit: 32, null: false
    t.string "type", null: false
    t.jsonb "search_params"
    t.integer "format", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["format"], name: "index_spree_exports_on_format"
    t.index ["number"], name: "index_spree_exports_on_number", unique: true
    t.index ["store_id"], name: "index_spree_exports_on_store_id"
    t.index ["user_id"], name: "index_spree_exports_on_user_id"
  end

  create_table "spree_gateway_customers", force: :cascade do |t|
    t.string "profile_id", null: false
    t.bigint "payment_method_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_method_id"], name: "index_spree_gateway_customers_on_payment_method_id"
    t.index ["user_id", "payment_method_id"], name: "index_spree_gateway_customers_on_user_id_and_payment_method_id", unique: true
    t.index ["user_id"], name: "index_spree_gateway_customers_on_user_id"
  end

  create_table "spree_gateways", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.text "description"
    t.boolean "active", default: true
    t.string "environment", default: "development"
    t.string "server", default: "test"
    t.boolean "test_mode", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "preferences"
    t.index ["active"], name: "index_spree_gateways_on_active"
    t.index ["test_mode"], name: "index_spree_gateways_on_test_mode"
  end

  create_table "spree_integrations", force: :cascade do |t|
    t.bigint "store_id", null: false
    t.string "type", null: false
    t.text "preferences"
    t.boolean "active", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["active"], name: "index_spree_integrations_on_active"
    t.index ["store_id"], name: "index_spree_integrations_on_store_id"
    t.index ["type"], name: "index_spree_integrations_on_type"
  end

  create_table "spree_inventory_units", force: :cascade do |t|
    t.string "state"
    t.bigint "variant_id"
    t.bigint "order_id"
    t.bigint "shipment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "pending", default: true
    t.bigint "line_item_id"
    t.integer "quantity", default: 1
    t.bigint "original_return_item_id"
    t.index ["line_item_id"], name: "index_spree_inventory_units_on_line_item_id"
    t.index ["order_id"], name: "index_inventory_units_on_order_id"
    t.index ["original_return_item_id"], name: "index_spree_inventory_units_on_original_return_item_id"
    t.index ["shipment_id"], name: "index_inventory_units_on_shipment_id"
    t.index ["variant_id"], name: "index_inventory_units_on_variant_id"
  end

  create_table "spree_invitations", force: :cascade do |t|
    t.string "email", null: false
    t.string "token", null: false
    t.string "status", null: false
    t.string "resource_type", null: false
    t.bigint "resource_id", null: false
    t.string "inviter_type", null: false
    t.bigint "inviter_id", null: false
    t.string "invitee_type"
    t.bigint "invitee_id"
    t.bigint "role_id", null: false
    t.datetime "accepted_at"
    t.datetime "expires_at"
    t.datetime "deleted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deleted_at"], name: "index_spree_invitations_on_deleted_at"
    t.index ["email"], name: "index_spree_invitations_on_email"
    t.index ["expires_at"], name: "index_spree_invitations_on_expires_at"
    t.index ["invitee_type", "invitee_id"], name: "index_spree_invitations_on_invitee"
    t.index ["inviter_type", "inviter_id"], name: "index_spree_invitations_on_inviter"
    t.index ["resource_type", "resource_id"], name: "index_spree_invitations_on_resource"
    t.index ["role_id"], name: "index_spree_invitations_on_role_id"
    t.index ["status"], name: "index_spree_invitations_on_status"
    t.index ["token"], name: "index_spree_invitations_on_token", unique: true
  end

  create_table "spree_line_items", force: :cascade do |t|
    t.bigint "variant_id"
    t.bigint "order_id"
    t.integer "quantity", null: false
    t.decimal "price", precision: 10, scale: 2, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "currency"
    t.decimal "cost_price", precision: 10, scale: 2
    t.bigint "tax_category_id"
    t.decimal "adjustment_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "additional_tax_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "promo_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "included_tax_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "pre_tax_amount", precision: 12, scale: 4, default: "0.0", null: false
    t.decimal "taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "non_taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["order_id"], name: "index_spree_line_items_on_order_id"
    t.index ["tax_category_id"], name: "index_spree_line_items_on_tax_category_id"
    t.index ["variant_id"], name: "index_spree_line_items_on_variant_id"
  end

  create_table "spree_log_entries", force: :cascade do |t|
    t.string "source_type"
    t.bigint "source_id"
    t.text "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_id", "source_type"], name: "index_spree_log_entries_on_source_id_and_source_type"
  end

  create_table "spree_oauth_access_grants", force: :cascade do |t|
    t.bigint "resource_owner_id", null: false
    t.bigint "application_id", null: false
    t.string "token", null: false
    t.integer "expires_in", null: false
    t.text "redirect_uri", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "revoked_at", precision: nil
    t.string "scopes"
    t.string "resource_owner_type", null: false
    t.index ["application_id"], name: "index_spree_oauth_access_grants_on_application_id"
    t.index ["resource_owner_id", "resource_owner_type"], name: "polymorphic_owner_oauth_access_grants"
    t.index ["token"], name: "index_spree_oauth_access_grants_on_token", unique: true
  end

  create_table "spree_oauth_access_tokens", force: :cascade do |t|
    t.bigint "resource_owner_id"
    t.bigint "application_id"
    t.string "token", null: false
    t.string "refresh_token"
    t.integer "expires_in"
    t.datetime "revoked_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.string "scopes"
    t.string "previous_refresh_token", default: "", null: false
    t.string "resource_owner_type"
    t.index ["application_id"], name: "index_spree_oauth_access_tokens_on_application_id"
    t.index ["refresh_token"], name: "index_spree_oauth_access_tokens_on_refresh_token", unique: true
    t.index ["resource_owner_id", "resource_owner_type"], name: "polymorphic_owner_oauth_access_tokens"
    t.index ["resource_owner_id"], name: "index_spree_oauth_access_tokens_on_resource_owner_id"
    t.index ["token"], name: "index_spree_oauth_access_tokens_on_token", unique: true
  end

  create_table "spree_oauth_applications", force: :cascade do |t|
    t.string "name", null: false
    t.string "uid", null: false
    t.string "secret", null: false
    t.text "redirect_uri", null: false
    t.string "scopes", default: "", null: false
    t.boolean "confidential", default: true, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["uid"], name: "index_spree_oauth_applications_on_uid", unique: true
  end

  create_table "spree_option_type_prototypes", force: :cascade do |t|
    t.bigint "prototype_id"
    t.bigint "option_type_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["option_type_id"], name: "index_spree_option_type_prototypes_on_option_type_id"
    t.index ["prototype_id", "option_type_id"], name: "spree_option_type_prototypes_prototype_id_option_type_id", unique: true
    t.index ["prototype_id"], name: "index_spree_option_type_prototypes_on_prototype_id"
  end

  create_table "spree_option_type_translations", force: :cascade do |t|
    t.string "presentation"
    t.string "locale", null: false
    t.bigint "spree_option_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locale"], name: "index_spree_option_type_translations_on_locale"
    t.index ["spree_option_type_id", "locale"], name: "unique_option_type_id_per_locale", unique: true
  end

  create_table "spree_option_types", force: :cascade do |t|
    t.string "name", limit: 100
    t.string "presentation", limit: 100
    t.integer "position", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "filterable", default: true, null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["filterable"], name: "index_spree_option_types_on_filterable"
    t.index ["name"], name: "index_spree_option_types_on_name"
    t.index ["position"], name: "index_spree_option_types_on_position"
  end

  create_table "spree_option_value_translations", force: :cascade do |t|
    t.string "presentation"
    t.string "locale", null: false
    t.bigint "spree_option_value_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locale"], name: "index_spree_option_value_translations_on_locale"
    t.index ["spree_option_value_id", "locale"], name: "unique_option_value_id_per_locale", unique: true
  end

  create_table "spree_option_value_variants", force: :cascade do |t|
    t.bigint "variant_id"
    t.bigint "option_value_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["option_value_id"], name: "index_spree_option_value_variants_on_option_value_id"
    t.index ["variant_id", "option_value_id"], name: "index_option_values_variants_on_variant_id_and_option_value_id", unique: true
    t.index ["variant_id"], name: "index_spree_option_value_variants_on_variant_id"
  end

  create_table "spree_option_values", force: :cascade do |t|
    t.integer "position"
    t.string "name"
    t.string "presentation"
    t.bigint "option_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["name"], name: "index_spree_option_values_on_name"
    t.index ["option_type_id"], name: "index_spree_option_values_on_option_type_id"
    t.index ["position"], name: "index_spree_option_values_on_position"
  end

  create_table "spree_order_promotions", force: :cascade do |t|
    t.bigint "order_id"
    t.bigint "promotion_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["order_id"], name: "index_spree_order_promotions_on_order_id"
    t.index ["promotion_id", "order_id"], name: "index_spree_order_promotions_on_promotion_id_and_order_id"
    t.index ["promotion_id"], name: "index_spree_order_promotions_on_promotion_id"
  end

  create_table "spree_orders", force: :cascade do |t|
    t.string "number", limit: 32
    t.decimal "item_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "total", precision: 10, scale: 2, default: "0.0", null: false
    t.string "state"
    t.decimal "adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.bigint "user_id"
    t.datetime "completed_at", precision: nil
    t.bigint "bill_address_id"
    t.bigint "ship_address_id"
    t.decimal "payment_total", precision: 10, scale: 2, default: "0.0"
    t.string "shipment_state"
    t.string "payment_state"
    t.string "email"
    t.text "special_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "currency"
    t.string "last_ip_address"
    t.bigint "created_by_id"
    t.decimal "shipment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "additional_tax_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "promo_total", precision: 10, scale: 2, default: "0.0"
    t.string "channel", default: "spree"
    t.decimal "included_tax_total", precision: 10, scale: 2, default: "0.0", null: false
    t.integer "item_count", default: 0
    t.bigint "approver_id"
    t.datetime "approved_at", precision: nil
    t.boolean "confirmation_delivered", default: false
    t.boolean "considered_risky", default: false
    t.string "token"
    t.datetime "canceled_at", precision: nil
    t.bigint "canceler_id"
    t.bigint "store_id"
    t.integer "state_lock_version", default: 0, null: false
    t.decimal "taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "non_taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.boolean "store_owner_notification_delivered"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.text "internal_note"
    t.boolean "accept_marketing", default: false
    t.boolean "signup_for_an_account", default: false
    t.index ["approver_id"], name: "index_spree_orders_on_approver_id"
    t.index ["bill_address_id"], name: "index_spree_orders_on_bill_address_id"
    t.index ["canceler_id"], name: "index_spree_orders_on_canceler_id"
    t.index ["completed_at"], name: "index_spree_orders_on_completed_at"
    t.index ["confirmation_delivered"], name: "index_spree_orders_on_confirmation_delivered"
    t.index ["considered_risky"], name: "index_spree_orders_on_considered_risky"
    t.index ["created_by_id"], name: "index_spree_orders_on_created_by_id"
    t.index ["number"], name: "index_spree_orders_on_number", unique: true
    t.index ["ship_address_id"], name: "index_spree_orders_on_ship_address_id"
    t.index ["store_id"], name: "index_spree_orders_on_store_id"
    t.index ["token"], name: "index_spree_orders_on_token"
    t.index ["user_id", "created_by_id"], name: "index_spree_orders_on_user_id_and_created_by_id"
  end

  create_table "spree_page_blocks", force: :cascade do |t|
    t.bigint "section_id", null: false
    t.string "name", null: false
    t.integer "position", default: 1, null: false
    t.string "type", null: false
    t.integer "page_links_count", default: 0
    t.text "preferences"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["section_id", "position"], name: "index_spree_page_blocks_on_section_w_position"
    t.index ["section_id"], name: "index_spree_page_blocks_on_section_id"
  end

  create_table "spree_page_links", force: :cascade do |t|
    t.string "parent_type"
    t.bigint "parent_id"
    t.string "linkable_type"
    t.bigint "linkable_id"
    t.string "label"
    t.string "url"
    t.boolean "open_in_new_tab", default: false
    t.integer "position", default: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["linkable_type", "linkable_id"], name: "index_spree_page_links_on_linkable"
    t.index ["parent_type", "parent_id"], name: "index_spree_page_links_on_parent"
  end

  create_table "spree_page_sections", force: :cascade do |t|
    t.string "pageable_type", null: false
    t.bigint "pageable_id", null: false
    t.string "type", null: false
    t.string "name", null: false
    t.integer "position", default: 1, null: false
    t.integer "page_links_count", default: 0
    t.text "preferences"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["pageable_id", "pageable_type", "position"], name: "index_spree_page_sections_on_pageable_w_position"
    t.index ["pageable_type", "pageable_id"], name: "index_spree_page_sections_on_pageable"
  end

  create_table "spree_pages", force: :cascade do |t|
    t.string "pageable_type", null: false
    t.bigint "pageable_id", null: false
    t.string "type", null: false
    t.string "slug"
    t.string "name", null: false
    t.string "meta_title"
    t.string "meta_description"
    t.string "meta_keywords"
    t.bigint "parent_id"
    t.text "preferences"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["pageable_id", "name"], name: "index_spree_pages_on_pageable_id_and_name"
    t.index ["pageable_id", "pageable_type", "type"], name: "index_spree_pages_on_pageable_id_and_pageable_type_and_type"
    t.index ["pageable_id", "pageable_type"], name: "index_spree_pages_on_pageable_id_and_pageable_type"
    t.index ["pageable_type", "pageable_id"], name: "index_spree_pages_on_pageable"
    t.index ["parent_id"], name: "index_spree_pages_on_parent_id"
  end

  create_table "spree_payment_capture_events", force: :cascade do |t|
    t.decimal "amount", precision: 10, scale: 2, default: "0.0"
    t.bigint "payment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_id"], name: "index_spree_payment_capture_events_on_payment_id"
  end

  create_table "spree_payment_methods", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.text "description"
    t.boolean "active", default: true
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "display_on", default: "both"
    t.boolean "auto_capture"
    t.text "preferences"
    t.integer "position", default: 0
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.jsonb "settings"
    t.index ["id", "type"], name: "index_spree_payment_methods_on_id_and_type"
  end

  create_table "spree_payment_methods_stores", id: false, force: :cascade do |t|
    t.bigint "payment_method_id"
    t.bigint "store_id"
    t.index ["payment_method_id", "store_id"], name: "payment_mentod_id_store_id_unique_index", unique: true
    t.index ["payment_method_id"], name: "index_spree_payment_methods_stores_on_payment_method_id"
    t.index ["store_id"], name: "index_spree_payment_methods_stores_on_store_id"
  end

  create_table "spree_payment_sources", force: :cascade do |t|
    t.string "gateway_payment_profile_id"
    t.string "type"
    t.bigint "payment_method_id"
    t.bigint "user_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "gateway_customer_profile_id"
    t.index ["payment_method_id"], name: "index_spree_payment_sources_on_payment_method_id"
    t.index ["type", "gateway_payment_profile_id"], name: "index_payment_sources_on_type_and_gateway_payment_profile_id", unique: true
    t.index ["type"], name: "index_spree_payment_sources_on_type"
    t.index ["user_id"], name: "index_spree_payment_sources_on_user_id"
  end

  create_table "spree_payments", force: :cascade do |t|
    t.decimal "amount", precision: 10, scale: 2, default: "0.0", null: false
    t.bigint "order_id"
    t.string "source_type"
    t.bigint "source_id"
    t.bigint "payment_method_id"
    t.string "state"
    t.string "response_code"
    t.string "avs_response"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "number"
    t.string "cvv_response_code"
    t.string "cvv_response_message"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["number"], name: "index_spree_payments_on_number", unique: true
    t.index ["order_id"], name: "index_spree_payments_on_order_id"
    t.index ["payment_method_id"], name: "index_spree_payments_on_payment_method_id"
    t.index ["source_id", "source_type"], name: "index_spree_payments_on_source_id_and_source_type"
  end

  create_table "spree_post_categories", force: :cascade do |t|
    t.bigint "store_id", null: false
    t.string "title", null: false
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug", "store_id"], name: "index_spree_post_categories_on_slug_and_store_id", unique: true
    t.index ["store_id"], name: "index_spree_post_categories_on_store_id"
  end

  create_table "spree_posts", force: :cascade do |t|
    t.bigint "author_id"
    t.datetime "published_at", precision: nil
    t.string "title", null: false
    t.string "slug", null: false
    t.bigint "post_category_id"
    t.bigint "store_id"
    t.string "meta_title"
    t.string "meta_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["author_id"], name: "index_spree_posts_on_author_id"
    t.index ["post_category_id"], name: "index_spree_posts_on_post_category_id"
    t.index ["store_id"], name: "index_spree_posts_on_store_id"
    t.index ["title"], name: "index_spree_posts_on_title"
  end

  create_table "spree_preferences", force: :cascade do |t|
    t.text "value"
    t.string "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key"], name: "index_spree_preferences_on_key", unique: true
  end

  create_table "spree_prices", force: :cascade do |t|
    t.bigint "variant_id", null: false
    t.decimal "amount", precision: 10, scale: 2
    t.string "currency"
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.decimal "compare_at_amount", precision: 10, scale: 2
    t.index ["deleted_at"], name: "index_spree_prices_on_deleted_at"
    t.index ["variant_id", "currency"], name: "index_spree_prices_on_variant_id_and_currency"
    t.index ["variant_id"], name: "index_spree_prices_on_variant_id"
  end

  create_table "spree_product_option_types", force: :cascade do |t|
    t.integer "position"
    t.bigint "product_id"
    t.bigint "option_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["option_type_id"], name: "index_spree_product_option_types_on_option_type_id"
    t.index ["position"], name: "index_spree_product_option_types_on_position"
    t.index ["product_id"], name: "index_spree_product_option_types_on_product_id"
  end

  create_table "spree_product_promotion_rules", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "promotion_rule_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["product_id", "promotion_rule_id"], name: "idx_on_product_id_promotion_rule_id_aaea0385c9", unique: true
    t.index ["product_id"], name: "index_products_promotion_rules_on_product_id"
    t.index ["promotion_rule_id", "product_id"], name: "index_products_promotion_rules_on_promotion_rule_and_product"
  end

  create_table "spree_product_properties", force: :cascade do |t|
    t.string "value"
    t.bigint "product_id"
    t.bigint "property_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position", default: 0
    t.boolean "show_property", default: true
    t.string "filter_param"
    t.index ["filter_param"], name: "index_spree_product_properties_on_filter_param"
    t.index ["position"], name: "index_spree_product_properties_on_position"
    t.index ["product_id"], name: "index_product_properties_on_product_id"
    t.index ["property_id", "product_id"], name: "index_spree_product_properties_on_property_id_and_product_id", unique: true
    t.index ["property_id"], name: "index_spree_product_properties_on_property_id"
  end

  create_table "spree_product_property_translations", force: :cascade do |t|
    t.string "value"
    t.string "locale", null: false
    t.bigint "spree_product_property_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locale"], name: "index_spree_product_property_translations_on_locale"
    t.index ["spree_product_property_id", "locale"], name: "unique_product_property_id_per_locale", unique: true
  end

  create_table "spree_product_translations", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "locale", null: false
    t.bigint "spree_product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "meta_description"
    t.string "meta_keywords"
    t.string "meta_title"
    t.string "slug"
    t.datetime "deleted_at", precision: nil
    t.index ["deleted_at"], name: "index_spree_product_translations_on_deleted_at"
    t.index ["locale", "slug"], name: "unique_slug_per_locale", unique: true
    t.index ["locale"], name: "index_spree_product_translations_on_locale"
    t.index ["spree_product_id", "locale"], name: "unique_product_id_per_locale", unique: true
  end

  create_table "spree_products", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.text "description"
    t.datetime "available_on", precision: nil
    t.datetime "deleted_at", precision: nil
    t.string "slug"
    t.text "meta_description"
    t.string "meta_keywords"
    t.bigint "tax_category_id"
    t.bigint "shipping_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "promotionable", default: true
    t.string "meta_title"
    t.datetime "discontinue_on", precision: nil
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "status", default: "draft", null: false
    t.datetime "make_active_at", precision: nil
    t.index ["available_on"], name: "index_spree_products_on_available_on"
    t.index ["deleted_at"], name: "index_spree_products_on_deleted_at"
    t.index ["discontinue_on"], name: "index_spree_products_on_discontinue_on"
    t.index ["make_active_at"], name: "index_spree_products_on_make_active_at"
    t.index ["name"], name: "index_spree_products_on_name"
    t.index ["shipping_category_id"], name: "index_spree_products_on_shipping_category_id"
    t.index ["slug"], name: "index_spree_products_on_slug", unique: true
    t.index ["status", "deleted_at"], name: "index_spree_products_on_status_and_deleted_at"
    t.index ["status"], name: "index_spree_products_on_status"
    t.index ["tax_category_id"], name: "index_spree_products_on_tax_category_id"
  end

  create_table "spree_products_stores", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "store_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["product_id", "store_id"], name: "index_spree_products_stores_on_product_id_and_store_id", unique: true
    t.index ["product_id"], name: "index_spree_products_stores_on_product_id"
    t.index ["store_id"], name: "index_spree_products_stores_on_store_id"
  end

  create_table "spree_products_taxons", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "taxon_id"
    t.integer "position"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["position"], name: "index_spree_products_taxons_on_position"
    t.index ["product_id", "taxon_id"], name: "index_spree_products_taxons_on_product_id_and_taxon_id", unique: true
    t.index ["product_id"], name: "index_spree_products_taxons_on_product_id"
    t.index ["taxon_id"], name: "index_spree_products_taxons_on_taxon_id"
  end

  create_table "spree_promotion_action_line_items", force: :cascade do |t|
    t.bigint "promotion_action_id"
    t.bigint "variant_id"
    t.integer "quantity", default: 1
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["promotion_action_id", "variant_id"], name: "idx_on_promotion_action_id_variant_id_90d181a88a", unique: true
    t.index ["promotion_action_id"], name: "index_spree_promotion_action_line_items_on_promotion_action_id"
    t.index ["variant_id"], name: "index_spree_promotion_action_line_items_on_variant_id"
  end

  create_table "spree_promotion_actions", force: :cascade do |t|
    t.bigint "promotion_id"
    t.integer "position"
    t.string "type"
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["deleted_at"], name: "index_spree_promotion_actions_on_deleted_at"
    t.index ["id", "type"], name: "index_spree_promotion_actions_on_id_and_type"
    t.index ["promotion_id"], name: "index_spree_promotion_actions_on_promotion_id"
  end

  create_table "spree_promotion_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "code"
  end

  create_table "spree_promotion_rule_taxons", force: :cascade do |t|
    t.bigint "taxon_id"
    t.bigint "promotion_rule_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["promotion_rule_id"], name: "index_spree_promotion_rule_taxons_on_promotion_rule_id"
    t.index ["taxon_id", "promotion_rule_id"], name: "idx_on_taxon_id_promotion_rule_id_3c91a6f5d7", unique: true
    t.index ["taxon_id"], name: "index_spree_promotion_rule_taxons_on_taxon_id"
  end

  create_table "spree_promotion_rule_users", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "promotion_rule_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["promotion_rule_id"], name: "index_promotion_rules_users_on_promotion_rule_id"
    t.index ["user_id", "promotion_rule_id"], name: "idx_on_user_id_promotion_rule_id_ad0307a89b", unique: true
    t.index ["user_id", "promotion_rule_id"], name: "index_promotion_rules_users_on_user_id_and_promotion_rule_id"
  end

  create_table "spree_promotion_rules", force: :cascade do |t|
    t.bigint "promotion_id"
    t.bigint "user_id"
    t.bigint "product_group_id"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "code"
    t.text "preferences"
    t.index ["product_group_id"], name: "index_promotion_rules_on_product_group_id"
    t.index ["promotion_id"], name: "index_spree_promotion_rules_on_promotion_id"
    t.index ["user_id"], name: "index_promotion_rules_on_user_id"
  end

  create_table "spree_promotions", force: :cascade do |t|
    t.string "description"
    t.datetime "expires_at", precision: nil
    t.datetime "starts_at", precision: nil
    t.string "name"
    t.string "type"
    t.integer "usage_limit"
    t.string "match_policy", default: "all"
    t.string "code"
    t.boolean "advertise", default: false
    t.string "path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "promotion_category_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "code_prefix"
    t.integer "number_of_codes"
    t.integer "kind", default: 0
    t.boolean "multi_codes", default: false
    t.index ["advertise"], name: "index_spree_promotions_on_advertise"
    t.index ["code"], name: "index_spree_promotions_on_code"
    t.index ["expires_at"], name: "index_spree_promotions_on_expires_at"
    t.index ["id", "type"], name: "index_spree_promotions_on_id_and_type"
    t.index ["kind"], name: "index_spree_promotions_on_kind"
    t.index ["path"], name: "index_spree_promotions_on_path"
    t.index ["promotion_category_id"], name: "index_spree_promotions_on_promotion_category_id"
    t.index ["starts_at"], name: "index_spree_promotions_on_starts_at"
  end

  create_table "spree_promotions_stores", force: :cascade do |t|
    t.bigint "promotion_id"
    t.bigint "store_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["promotion_id", "store_id"], name: "index_spree_promotions_stores_on_promotion_id_and_store_id", unique: true
    t.index ["promotion_id"], name: "index_spree_promotions_stores_on_promotion_id"
    t.index ["store_id"], name: "index_spree_promotions_stores_on_store_id"
  end

  create_table "spree_properties", force: :cascade do |t|
    t.string "name"
    t.string "presentation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "filterable", default: false, null: false
    t.string "filter_param"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "display_on", default: "both"
    t.integer "position", default: 0
    t.integer "kind", default: 0
    t.index ["filter_param"], name: "index_spree_properties_on_filter_param"
    t.index ["filterable"], name: "index_spree_properties_on_filterable"
    t.index ["name"], name: "index_spree_properties_on_name"
    t.index ["position"], name: "index_spree_properties_on_position"
  end

  create_table "spree_property_prototypes", force: :cascade do |t|
    t.bigint "prototype_id"
    t.bigint "property_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["property_id"], name: "index_spree_property_prototypes_on_property_id"
    t.index ["prototype_id", "property_id"], name: "index_property_prototypes_on_prototype_id_and_property_id", unique: true
    t.index ["prototype_id"], name: "index_spree_property_prototypes_on_prototype_id"
  end

  create_table "spree_property_translations", force: :cascade do |t|
    t.string "presentation"
    t.string "locale", null: false
    t.bigint "spree_property_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locale"], name: "index_spree_property_translations_on_locale"
    t.index ["spree_property_id", "locale"], name: "unique_property_id_per_locale", unique: true
  end

  create_table "spree_prototype_taxons", force: :cascade do |t|
    t.bigint "taxon_id"
    t.bigint "prototype_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["prototype_id", "taxon_id"], name: "index_spree_prototype_taxons_on_prototype_id_and_taxon_id"
    t.index ["prototype_id"], name: "index_spree_prototype_taxons_on_prototype_id"
    t.index ["taxon_id"], name: "index_spree_prototype_taxons_on_taxon_id"
  end

  create_table "spree_prototypes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
  end

  create_table "spree_refund_reasons", force: :cascade do |t|
    t.string "name"
    t.boolean "active", default: true
    t.boolean "mutable", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_spree_refund_reasons_on_name", unique: true
  end

  create_table "spree_refunds", force: :cascade do |t|
    t.bigint "payment_id"
    t.decimal "amount", precision: 10, scale: 2, default: "0.0", null: false
    t.string "transaction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "refund_reason_id"
    t.bigint "reimbursement_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.bigint "refunder_id"
    t.index ["payment_id"], name: "index_spree_refunds_on_payment_id"
    t.index ["refund_reason_id"], name: "index_refunds_on_refund_reason_id"
    t.index ["refunder_id"], name: "index_spree_refunds_on_refunder_id"
    t.index ["reimbursement_id"], name: "index_spree_refunds_on_reimbursement_id"
  end

  create_table "spree_reimbursement_credits", force: :cascade do |t|
    t.decimal "amount", precision: 10, scale: 2, default: "0.0", null: false
    t.bigint "reimbursement_id"
    t.bigint "creditable_id"
    t.string "creditable_type"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["creditable_id", "creditable_type"], name: "index_reimbursement_credits_on_creditable_id_and_type"
    t.index ["reimbursement_id"], name: "index_spree_reimbursement_credits_on_reimbursement_id"
  end

  create_table "spree_reimbursement_types", force: :cascade do |t|
    t.string "name"
    t.boolean "active", default: true
    t.boolean "mutable", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "type"
    t.index ["name"], name: "index_spree_reimbursement_types_on_name", unique: true
    t.index ["type"], name: "index_spree_reimbursement_types_on_type"
  end

  create_table "spree_reimbursements", force: :cascade do |t|
    t.string "number"
    t.string "reimbursement_status"
    t.bigint "customer_return_id"
    t.bigint "order_id"
    t.decimal "total", precision: 10, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "performed_by_id"
    t.index ["customer_return_id"], name: "index_spree_reimbursements_on_customer_return_id"
    t.index ["number"], name: "index_spree_reimbursements_on_number", unique: true
    t.index ["order_id"], name: "index_spree_reimbursements_on_order_id"
  end

  create_table "spree_reports", force: :cascade do |t|
    t.bigint "store_id", null: false
    t.bigint "user_id"
    t.string "type"
    t.string "currency"
    t.datetime "date_from", precision: nil
    t.datetime "date_to", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["store_id"], name: "index_spree_reports_on_store_id"
    t.index ["user_id"], name: "index_spree_reports_on_user_id"
  end

  create_table "spree_return_authorization_reasons", force: :cascade do |t|
    t.string "name"
    t.boolean "active", default: true
    t.boolean "mutable", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_spree_return_authorization_reasons_on_name", unique: true
  end

  create_table "spree_return_authorizations", force: :cascade do |t|
    t.string "number"
    t.string "state"
    t.bigint "order_id"
    t.text "memo"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.bigint "stock_location_id"
    t.bigint "return_authorization_reason_id"
    t.index ["number"], name: "index_spree_return_authorizations_on_number", unique: true
    t.index ["order_id"], name: "index_spree_return_authorizations_on_order_id"
    t.index ["return_authorization_reason_id"], name: "index_return_authorizations_on_return_authorization_reason_id"
    t.index ["stock_location_id"], name: "index_spree_return_authorizations_on_stock_location_id"
  end

  create_table "spree_return_items", force: :cascade do |t|
    t.bigint "return_authorization_id"
    t.bigint "inventory_unit_id"
    t.bigint "exchange_variant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "pre_tax_amount", precision: 12, scale: 4, default: "0.0", null: false
    t.decimal "included_tax_total", precision: 12, scale: 4, default: "0.0", null: false
    t.decimal "additional_tax_total", precision: 12, scale: 4, default: "0.0", null: false
    t.string "reception_status"
    t.string "acceptance_status"
    t.bigint "customer_return_id"
    t.bigint "reimbursement_id"
    t.text "acceptance_status_errors"
    t.bigint "preferred_reimbursement_type_id"
    t.bigint "override_reimbursement_type_id"
    t.boolean "resellable", default: true, null: false
    t.index ["customer_return_id"], name: "index_return_items_on_customer_return_id"
    t.index ["exchange_variant_id"], name: "index_spree_return_items_on_exchange_variant_id"
    t.index ["inventory_unit_id"], name: "index_spree_return_items_on_inventory_unit_id"
    t.index ["override_reimbursement_type_id"], name: "index_spree_return_items_on_override_reimbursement_type_id"
    t.index ["preferred_reimbursement_type_id"], name: "index_spree_return_items_on_preferred_reimbursement_type_id"
    t.index ["reimbursement_id"], name: "index_spree_return_items_on_reimbursement_id"
    t.index ["return_authorization_id"], name: "index_spree_return_items_on_return_authorization_id"
  end

  create_table "spree_role_users", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.string "user_type", null: false
    t.string "resource_type"
    t.bigint "resource_id"
    t.bigint "invitation_id"
    t.index ["invitation_id"], name: "index_spree_role_users_on_invitation_id"
    t.index ["resource_id", "resource_type", "user_id", "user_type", "role_id"], name: "idx_on_resource_id_resource_type_user_id_user_type__5600304ec6", unique: true
    t.index ["resource_type", "resource_id"], name: "index_spree_role_users_on_resource"
    t.index ["role_id"], name: "index_spree_role_users_on_role_id"
    t.index ["user_id"], name: "index_spree_role_users_on_user_id"
    t.index ["user_type"], name: "index_spree_role_users_on_user_type"
  end

  create_table "spree_roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["name"], name: "index_spree_roles_on_name", unique: true
  end

  create_table "spree_shipments", force: :cascade do |t|
    t.string "tracking"
    t.string "number"
    t.decimal "cost", precision: 10, scale: 2, default: "0.0"
    t.datetime "shipped_at", precision: nil
    t.bigint "order_id"
    t.bigint "address_id"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "stock_location_id"
    t.decimal "adjustment_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "additional_tax_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "promo_total", precision: 10, scale: 2, default: "0.0"
    t.decimal "included_tax_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "pre_tax_amount", precision: 12, scale: 4, default: "0.0", null: false
    t.decimal "taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.decimal "non_taxable_adjustment_total", precision: 10, scale: 2, default: "0.0", null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["address_id"], name: "index_spree_shipments_on_address_id"
    t.index ["number"], name: "index_spree_shipments_on_number", unique: true
    t.index ["order_id"], name: "index_spree_shipments_on_order_id"
    t.index ["stock_location_id"], name: "index_spree_shipments_on_stock_location_id"
  end

  create_table "spree_shipping_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_spree_shipping_categories_on_name"
  end

  create_table "spree_shipping_method_categories", force: :cascade do |t|
    t.bigint "shipping_method_id", null: false
    t.bigint "shipping_category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shipping_category_id", "shipping_method_id"], name: "unique_spree_shipping_method_categories", unique: true
    t.index ["shipping_category_id"], name: "index_spree_shipping_method_categories_on_shipping_category_id"
    t.index ["shipping_method_id"], name: "index_spree_shipping_method_categories_on_shipping_method_id"
  end

  create_table "spree_shipping_method_zones", force: :cascade do |t|
    t.bigint "shipping_method_id"
    t.bigint "zone_id"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["shipping_method_id"], name: "index_spree_shipping_method_zones_on_shipping_method_id"
    t.index ["zone_id"], name: "index_spree_shipping_method_zones_on_zone_id"
  end

  create_table "spree_shipping_methods", force: :cascade do |t|
    t.string "name"
    t.string "display_on"
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tracking_url"
    t.string "admin_name"
    t.bigint "tax_category_id"
    t.string "code"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.integer "estimated_transit_business_days_min"
    t.integer "estimated_transit_business_days_max"
    t.index ["deleted_at"], name: "index_spree_shipping_methods_on_deleted_at"
    t.index ["tax_category_id"], name: "index_spree_shipping_methods_on_tax_category_id"
  end

  create_table "spree_shipping_rates", force: :cascade do |t|
    t.bigint "shipment_id"
    t.bigint "shipping_method_id"
    t.boolean "selected", default: false
    t.decimal "cost", precision: 8, scale: 2, default: "0.0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "tax_rate_id"
    t.index ["selected"], name: "index_spree_shipping_rates_on_selected"
    t.index ["shipment_id", "shipping_method_id"], name: "spree_shipping_rates_join_index", unique: true
    t.index ["shipment_id"], name: "index_spree_shipping_rates_on_shipment_id"
    t.index ["shipping_method_id"], name: "index_spree_shipping_rates_on_shipping_method_id"
    t.index ["tax_rate_id"], name: "index_spree_shipping_rates_on_tax_rate_id"
  end

  create_table "spree_state_changes", force: :cascade do |t|
    t.string "name"
    t.string "previous_state"
    t.bigint "stateful_id"
    t.bigint "user_id"
    t.string "stateful_type"
    t.string "next_state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stateful_id", "stateful_type"], name: "index_spree_state_changes_on_stateful_id_and_stateful_type"
  end

  create_table "spree_states", force: :cascade do |t|
    t.string "name"
    t.string "abbr"
    t.bigint "country_id"
    t.datetime "updated_at", precision: nil
    t.datetime "created_at", precision: nil
    t.index ["country_id"], name: "index_spree_states_on_country_id"
  end

  create_table "spree_stock_items", force: :cascade do |t|
    t.bigint "stock_location_id"
    t.bigint "variant_id"
    t.integer "count_on_hand", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "backorderable", default: false
    t.datetime "deleted_at", precision: nil
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["backorderable"], name: "index_spree_stock_items_on_backorderable"
    t.index ["deleted_at"], name: "index_spree_stock_items_on_deleted_at"
    t.index ["stock_location_id", "variant_id", "deleted_at"], name: "stock_item_by_loc_var_id_deleted_at", unique: true
    t.index ["stock_location_id", "variant_id"], name: "stock_item_by_loc_and_var_id"
    t.index ["stock_location_id"], name: "index_spree_stock_items_on_stock_location_id"
    t.index ["variant_id", "stock_location_id"], name: "index_spree_stock_items_unique_without_deleted_at", unique: true, where: "(deleted_at IS NULL)"
    t.index ["variant_id"], name: "index_spree_stock_items_on_variant_id"
  end

  create_table "spree_stock_locations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "default", default: false, null: false
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.bigint "state_id"
    t.string "state_name"
    t.bigint "country_id"
    t.string "zipcode"
    t.string "phone"
    t.boolean "active", default: true
    t.boolean "backorderable_default", default: false
    t.boolean "propagate_all_variants", default: false
    t.string "admin_name"
    t.datetime "deleted_at", precision: nil
    t.string "company"
    t.index ["active"], name: "index_spree_stock_locations_on_active"
    t.index ["backorderable_default"], name: "index_spree_stock_locations_on_backorderable_default"
    t.index ["country_id"], name: "index_spree_stock_locations_on_country_id"
    t.index ["deleted_at"], name: "index_spree_stock_locations_on_deleted_at"
    t.index ["propagate_all_variants"], name: "index_spree_stock_locations_on_propagate_all_variants"
    t.index ["state_id"], name: "index_spree_stock_locations_on_state_id"
  end

  create_table "spree_stock_movements", force: :cascade do |t|
    t.bigint "stock_item_id"
    t.integer "quantity", default: 0
    t.string "action"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "originator_type"
    t.bigint "originator_id"
    t.index ["originator_id", "originator_type"], name: "index_stock_movements_on_originator_id_and_originator_type"
    t.index ["stock_item_id"], name: "index_spree_stock_movements_on_stock_item_id"
  end

  create_table "spree_stock_transfers", force: :cascade do |t|
    t.string "type"
    t.string "reference"
    t.bigint "source_location_id"
    t.bigint "destination_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "number"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["destination_location_id"], name: "index_spree_stock_transfers_on_destination_location_id"
    t.index ["number"], name: "index_spree_stock_transfers_on_number", unique: true
    t.index ["source_location_id"], name: "index_spree_stock_transfers_on_source_location_id"
  end

  create_table "spree_store_credit_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spree_store_credit_events", force: :cascade do |t|
    t.bigint "store_credit_id", null: false
    t.string "action", null: false
    t.decimal "amount", precision: 8, scale: 2
    t.string "authorization_code", null: false
    t.decimal "user_total_amount", precision: 8, scale: 2, default: "0.0", null: false
    t.bigint "originator_id"
    t.string "originator_type"
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["originator_id", "originator_type"], name: "spree_store_credit_events_originator"
    t.index ["store_credit_id"], name: "index_spree_store_credit_events_on_store_credit_id"
  end

  create_table "spree_store_credit_types", force: :cascade do |t|
    t.string "name"
    t.integer "priority"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["priority"], name: "index_spree_store_credit_types_on_priority"
  end

  create_table "spree_store_credits", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "category_id"
    t.bigint "created_by_id"
    t.decimal "amount", precision: 8, scale: 2, default: "0.0", null: false
    t.decimal "amount_used", precision: 8, scale: 2, default: "0.0", null: false
    t.text "memo"
    t.datetime "deleted_at", precision: nil
    t.string "currency"
    t.decimal "amount_authorized", precision: 8, scale: 2, default: "0.0", null: false
    t.bigint "originator_id"
    t.string "originator_type"
    t.bigint "type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "store_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["deleted_at"], name: "index_spree_store_credits_on_deleted_at"
    t.index ["originator_id", "originator_type"], name: "spree_store_credits_originator"
    t.index ["store_id"], name: "index_spree_store_credits_on_store_id"
    t.index ["type_id"], name: "index_spree_store_credits_on_type_id"
    t.index ["user_id"], name: "index_spree_store_credits_on_user_id"
  end

  create_table "spree_store_translations", force: :cascade do |t|
    t.string "name"
    t.text "meta_description"
    t.text "meta_keywords"
    t.string "seo_title"
    t.string "facebook"
    t.string "twitter"
    t.string "instagram"
    t.string "customer_support_email"
    t.text "description"
    t.text "address"
    t.string "contact_phone"
    t.string "new_order_notifications_email"
    t.string "locale", null: false
    t.bigint "spree_store_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["deleted_at"], name: "index_spree_store_translations_on_deleted_at"
    t.index ["locale"], name: "index_spree_store_translations_on_locale"
    t.index ["spree_store_id", "locale"], name: "index_spree_store_translations_on_spree_store_id_locale", unique: true
  end

  create_table "spree_stores", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.text "meta_description"
    t.text "meta_keywords"
    t.string "seo_title"
    t.string "mail_from_address"
    t.string "default_currency"
    t.string "code"
    t.boolean "default", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "supported_currencies"
    t.string "facebook"
    t.string "twitter"
    t.string "instagram"
    t.string "default_locale"
    t.string "customer_support_email"
    t.bigint "default_country_id"
    t.text "description"
    t.text "address"
    t.string "contact_phone"
    t.string "new_order_notifications_email"
    t.bigint "checkout_zone_id"
    t.string "seo_robots"
    t.string "supported_locales"
    t.datetime "deleted_at", precision: nil
    t.jsonb "settings"
    t.text "preferences"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.text "storefront_custom_code_head"
    t.text "storefront_custom_code_body_start"
    t.text "storefront_custom_code_body_end"
    t.index ["code"], name: "index_spree_stores_on_code", unique: true
    t.index ["default"], name: "index_spree_stores_on_default"
    t.index ["deleted_at"], name: "index_spree_stores_on_deleted_at"
    t.index ["url"], name: "index_spree_stores_on_url"
  end

  create_table "spree_stripe_payment_intents", force: :cascade do |t|
    t.decimal "amount", precision: 10, scale: 2, default: "0.0", null: false
    t.bigint "order_id", null: false
    t.bigint "payment_method_id", null: false
    t.string "stripe_id", null: false
    t.string "client_secret", null: false
    t.string "customer_id"
    t.string "ephemeral_key_secret"
    t.string "stripe_payment_method_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id", "stripe_id"], name: "index_spree_stripe_payment_intents_on_order_id_and_stripe_id", unique: true
    t.index ["order_id"], name: "index_spree_stripe_payment_intents_on_order_id"
    t.index ["payment_method_id"], name: "index_spree_stripe_payment_intents_on_payment_method_id"
  end

  create_table "spree_stripe_payment_methods_webhook_keys", force: :cascade do |t|
    t.bigint "payment_method_id", null: false
    t.bigint "webhook_key_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_method_id", "webhook_key_id"], name: "index_payment_method_id_webhook_key_id_uniqueness", unique: true
    t.index ["payment_method_id"], name: "index_payment_methods_webhook_keys_on_payment_method_id"
    t.index ["webhook_key_id"], name: "index_payment_methods_webhook_keys_on_webhook_key_id"
  end

  create_table "spree_stripe_webhook_keys", force: :cascade do |t|
    t.string "stripe_id", null: false
    t.string "signing_secret", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["signing_secret"], name: "index_spree_stripe_webhook_keys_on_signing_secret", unique: true
    t.index ["stripe_id"], name: "index_spree_stripe_webhook_keys_on_stripe_id", unique: true
  end

  create_table "spree_taggings", force: :cascade do |t|
    t.bigint "tag_id"
    t.string "taggable_type"
    t.bigint "taggable_id"
    t.string "tagger_type"
    t.bigint "tagger_id"
    t.string "context", limit: 128
    t.datetime "created_at", precision: nil
    t.string "tenant", limit: 128
    t.index ["context"], name: "index_spree_taggings_on_context"
    t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "spree_taggings_idx", unique: true
    t.index ["tag_id"], name: "index_spree_taggings_on_tag_id"
    t.index ["taggable_id", "taggable_type", "context"], name: "spree_taggings_taggable_context_idx"
    t.index ["taggable_id", "taggable_type", "tagger_id", "context"], name: "spree_taggings_idy"
    t.index ["taggable_id"], name: "index_spree_taggings_on_taggable_id"
    t.index ["taggable_type", "taggable_id"], name: "index_spree_taggings_on_taggable_type_and_taggable_id"
    t.index ["taggable_type"], name: "index_spree_taggings_on_taggable_type"
    t.index ["tagger_id", "tagger_type"], name: "index_spree_taggings_on_tagger_id_and_tagger_type"
    t.index ["tagger_id"], name: "index_spree_taggings_on_tagger_id"
    t.index ["tagger_type", "tagger_id"], name: "index_spree_taggings_on_tagger_type_and_tagger_id"
    t.index ["tenant"], name: "index_spree_taggings_on_tenant"
  end

  create_table "spree_tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "taggings_count", default: 0
    t.index "lower((name)::text) varchar_pattern_ops", name: "index_spree_tags_on_lower_name"
    t.index ["name"], name: "index_spree_tags_on_name", unique: true
  end

  create_table "spree_tax_categories", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "is_default", default: false
    t.datetime "deleted_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tax_code"
    t.index ["deleted_at"], name: "index_spree_tax_categories_on_deleted_at"
    t.index ["is_default"], name: "index_spree_tax_categories_on_is_default"
  end

  create_table "spree_tax_rates", force: :cascade do |t|
    t.decimal "amount", precision: 8, scale: 5
    t.bigint "zone_id"
    t.bigint "tax_category_id"
    t.boolean "included_in_price", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.boolean "show_rate_in_label", default: true
    t.datetime "deleted_at", precision: nil
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["deleted_at"], name: "index_spree_tax_rates_on_deleted_at"
    t.index ["included_in_price"], name: "index_spree_tax_rates_on_included_in_price"
    t.index ["show_rate_in_label"], name: "index_spree_tax_rates_on_show_rate_in_label"
    t.index ["tax_category_id"], name: "index_spree_tax_rates_on_tax_category_id"
    t.index ["zone_id"], name: "index_spree_tax_rates_on_zone_id"
  end

  create_table "spree_taxon_rules", force: :cascade do |t|
    t.bigint "taxon_id", null: false
    t.string "type", null: false
    t.string "value", null: false
    t.string "match_policy", default: "is_equal_to", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["taxon_id"], name: "index_spree_taxon_rules_on_taxon_id"
  end

  create_table "spree_taxon_translations", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "locale", null: false
    t.bigint "spree_taxon_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "meta_title"
    t.string "meta_description"
    t.string "meta_keywords"
    t.string "permalink"
    t.string "pretty_name"
    t.index ["locale"], name: "index_spree_taxon_translations_on_locale"
    t.index ["pretty_name"], name: "index_spree_taxon_translations_on_pretty_name"
    t.index ["spree_taxon_id", "locale"], name: "index_spree_taxon_translations_on_spree_taxon_id_and_locale", unique: true
  end

  create_table "spree_taxonomies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position", default: 0
    t.bigint "store_id"
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.index ["name", "store_id"], name: "index_spree_taxonomies_on_name_and_store_id", unique: true
    t.index ["position"], name: "index_spree_taxonomies_on_position"
    t.index ["store_id"], name: "index_spree_taxonomies_on_store_id"
  end

  create_table "spree_taxonomy_translations", force: :cascade do |t|
    t.string "name"
    t.string "locale", null: false
    t.bigint "spree_taxonomy_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["locale"], name: "index_spree_taxonomy_translations_on_locale"
    t.index ["spree_taxonomy_id", "locale"], name: "index_spree_taxonomy_translations_on_spree_taxonomy_id_locale", unique: true
  end

  create_table "spree_taxons", force: :cascade do |t|
    t.bigint "parent_id"
    t.integer "position", default: 0
    t.string "name", null: false
    t.string "permalink"
    t.bigint "taxonomy_id"
    t.bigint "lft"
    t.bigint "rgt"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "meta_title"
    t.string "meta_description"
    t.string "meta_keywords"
    t.integer "depth"
    t.boolean "hide_from_nav", default: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "pretty_name"
    t.string "rules_match_policy", default: "all", null: false
    t.string "sort_order", default: "manual", null: false
    t.boolean "automatic", default: false, null: false
    t.index ["lft"], name: "index_spree_taxons_on_lft"
    t.index ["name", "parent_id", "taxonomy_id"], name: "index_spree_taxons_on_name_and_parent_id_and_taxonomy_id", unique: true
    t.index ["name"], name: "index_spree_taxons_on_name"
    t.index ["parent_id"], name: "index_taxons_on_parent_id"
    t.index ["permalink", "parent_id", "taxonomy_id"], name: "index_spree_taxons_on_permalink_and_parent_id_and_taxonomy_id", unique: true
    t.index ["permalink"], name: "index_taxons_on_permalink"
    t.index ["position"], name: "index_spree_taxons_on_position"
    t.index ["pretty_name"], name: "index_spree_taxons_on_pretty_name"
    t.index ["rgt"], name: "index_spree_taxons_on_rgt"
    t.index ["taxonomy_id"], name: "index_taxons_on_taxonomy_id"
  end

  create_table "spree_themes", force: :cascade do |t|
    t.string "name"
    t.bigint "store_id", null: false
    t.boolean "default", default: false, null: false
    t.boolean "ready", default: true
    t.string "type", default: "Spree::Themes::Default", null: false
    t.bigint "parent_id"
    t.text "preferences"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at", precision: nil
    t.index ["deleted_at"], name: "index_spree_themes_on_deleted_at"
    t.index ["parent_id"], name: "index_spree_themes_on_parent_id"
    t.index ["store_id"], name: "index_spree_themes_on_store_id"
  end

  create_table "spree_trackers", force: :cascade do |t|
    t.string "analytics_id"
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "engine", default: 0, null: false
    t.index ["active"], name: "index_spree_trackers_on_active"
  end

  create_table "spree_users", force: :cascade do |t|
    t.string "encrypted_password", limit: 128
    t.string "password_salt", limit: 128
    t.string "email"
    t.string "remember_token"
    t.string "persistence_token"
    t.string "reset_password_token"
    t.string "perishable_token"
    t.integer "sign_in_count", default: 0, null: false
    t.integer "failed_attempts", default: 0, null: false
    t.datetime "last_request_at", precision: nil
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "login"
    t.bigint "ship_address_id"
    t.bigint "bill_address_id"
    t.string "authentication_token"
    t.string "unlock_token"
    t.datetime "locked_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "first_name"
    t.string "last_name"
    t.string "selected_locale"
    t.string "phone"
    t.boolean "accepts_email_marketing", default: false, null: false
    t.string "spree_api_key", limit: 48
    t.index ["accepts_email_marketing"], name: "index_spree_users_on_accepts_email_marketing"
    t.index ["spree_api_key"], name: "index_spree_users_on_spree_api_key"
  end

  create_table "spree_variants", force: :cascade do |t|
    t.string "sku", default: "", null: false
    t.decimal "weight", precision: 8, scale: 2, default: "0.0"
    t.decimal "height", precision: 8, scale: 2
    t.decimal "width", precision: 8, scale: 2
    t.decimal "depth", precision: 8, scale: 2
    t.datetime "deleted_at", precision: nil
    t.boolean "is_master", default: false
    t.bigint "product_id"
    t.decimal "cost_price", precision: 10, scale: 2
    t.integer "position"
    t.string "cost_currency"
    t.boolean "track_inventory", default: true
    t.bigint "tax_category_id"
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "discontinue_on", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.jsonb "public_metadata"
    t.jsonb "private_metadata"
    t.string "barcode"
    t.string "weight_unit"
    t.string "dimensions_unit"
    t.index ["barcode"], name: "index_spree_variants_on_barcode"
    t.index ["deleted_at"], name: "index_spree_variants_on_deleted_at"
    t.index ["discontinue_on"], name: "index_spree_variants_on_discontinue_on"
    t.index ["is_master"], name: "index_spree_variants_on_is_master"
    t.index ["position"], name: "index_spree_variants_on_position"
    t.index ["product_id"], name: "index_spree_variants_on_product_id"
    t.index ["sku"], name: "index_spree_variants_on_sku"
    t.index ["tax_category_id"], name: "index_spree_variants_on_tax_category_id"
    t.index ["track_inventory"], name: "index_spree_variants_on_track_inventory"
  end

  create_table "spree_webhooks_events", force: :cascade do |t|
    t.integer "execution_time"
    t.string "name", null: false
    t.string "request_errors"
    t.string "response_code"
    t.bigint "subscriber_id", null: false
    t.boolean "success"
    t.string "url", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["response_code"], name: "index_spree_webhooks_events_on_response_code"
    t.index ["subscriber_id"], name: "index_spree_webhooks_events_on_subscriber_id"
    t.index ["success"], name: "index_spree_webhooks_events_on_success"
  end

  create_table "spree_webhooks_subscribers", force: :cascade do |t|
    t.string "url", null: false
    t.boolean "active", default: false
    t.jsonb "subscriptions"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "secret_key", null: false
    t.index ["active"], name: "index_spree_webhooks_subscribers_on_active"
  end

  create_table "spree_wished_items", force: :cascade do |t|
    t.bigint "variant_id"
    t.bigint "wishlist_id"
    t.integer "quantity", default: 1, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["variant_id", "wishlist_id"], name: "index_spree_wished_items_on_variant_id_and_wishlist_id", unique: true
    t.index ["variant_id"], name: "index_spree_wished_items_on_variant_id"
    t.index ["wishlist_id"], name: "index_spree_wished_items_on_wishlist_id"
  end

  create_table "spree_wishlists", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "store_id"
    t.string "name"
    t.string "token", null: false
    t.boolean "is_private", default: true, null: false
    t.boolean "is_default", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["store_id"], name: "index_spree_wishlists_on_store_id"
    t.index ["token"], name: "index_spree_wishlists_on_token", unique: true
    t.index ["user_id", "is_default"], name: "index_spree_wishlists_on_user_id_and_is_default"
    t.index ["user_id"], name: "index_spree_wishlists_on_user_id"
  end

  create_table "spree_zone_members", force: :cascade do |t|
    t.string "zoneable_type"
    t.bigint "zoneable_id"
    t.bigint "zone_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["zone_id"], name: "index_spree_zone_members_on_zone_id"
    t.index ["zoneable_id", "zoneable_type"], name: "index_spree_zone_members_on_zoneable_id_and_zoneable_type"
  end

  create_table "spree_zones", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "default_tax", default: false
    t.integer "zone_members_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "kind", default: "state"
    t.index ["default_tax"], name: "index_spree_zones_on_default_tax"
    t.index ["kind"], name: "index_spree_zones_on_kind"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "spree_oauth_access_grants", "spree_oauth_applications", column: "application_id"
  add_foreign_key "spree_oauth_access_tokens", "spree_oauth_applications", column: "application_id"
  add_foreign_key "spree_option_type_translations", "spree_option_types"
  add_foreign_key "spree_option_value_translations", "spree_option_values"
  add_foreign_key "spree_payment_sources", "spree_payment_methods", column: "payment_method_id"
  add_foreign_key "spree_payment_sources", "spree_users", column: "user_id"
  add_foreign_key "spree_product_property_translations", "spree_product_properties"
  add_foreign_key "spree_product_translations", "spree_products"
  add_foreign_key "spree_property_translations", "spree_properties"
  add_foreign_key "spree_store_translations", "spree_stores"
  add_foreign_key "spree_taxon_translations", "spree_taxons"
  add_foreign_key "spree_taxonomy_translations", "spree_taxonomies"
end
