export type User = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
};

export type Cart = {
  data: {
    id: string;
    type: 'cart';
    attributes: {
      number: string;
      item_total: string;
      total: string;
      ship_total: string;
      adjustment_total: string;
      created_at: string;
      updated_at: string;
      completed_at: string;
      included_tax_total: string;
      additional_tax_total: string;
      display_additional_tax_total: string;
      display_included_tax_total: string;
      tax_total: string;
      currency: string;
      state: string;
      token: string;
      email: string;
      display_item_total: string;
      display_ship_total: string;
      display_adjustment_total: string;
      display_tax_total: string;
      promo_total: string;
      display_promo_total: string;
      item_count: number;
      special_instructions: string | null;
      display_total: string;
      pre_tax_item_amount: string;
      display_pre_tax_item_amount: string;
      pre_tax_total: string;
      display_pre_tax_total: string;
      shipment_state: string;
      payment_state: string;
      public_metadata: Record<string, unknown>;
      total_minus_store_credits: string;
      display_total_minus_store_credits: string;
      subtotal_cents: number;
      ship_total_cents: number;
      store_credit_total_cents: number;
      promo_total_cents: number;
      tax_total_cents: number;
      total_cents: number;
      total_minus_store_credits_cents: number;
    };
    relationships: {
      line_items: {
        data: Array<{ id: string; type: 'line_item' }>;
      };
      variants: {
        data: Array<{ id: string; type: 'variant' }>;
      };
      promotions: {
        data: Array<unknown>; // or a specific type if known
      };
      payments: {
        data: Array<{ id: string; type: 'payment' }>;
      };
      shipments: {
        data: Array<{ id: string; type: 'shipment' }>;
      };
      user: {
        data: { id: string; type: 'user' };
      };
      billing_address: {
        data: { id: string; type: 'address' };
      };
      shipping_address: {
        data: { id: string; type: 'address' };
      };
    };
  };
};
