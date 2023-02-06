Rails.application.config.after_initialize do
    Rails.application.config.spree.payment_methods << Spree::Gateway::HyperPay

  end
