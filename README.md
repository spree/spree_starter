# Spree Starter

This is a starter kit for [Spree Commerce](https://spreecommerce.org) - the [open-source eCommerce platform](https://spreecommerce.org) for [Rails](https://spreecommerce.org/category/ruby-on-rails/). 

It is a great starting point for any Rails developer to quickly build an eCommerce application.

This starter uses:

* **[Spree Commerce 5](https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/)**, the biggest release ever, which includes Admin Dashboard, API and Storefront - everything you need to start developing your new eCommerce application/store/marketeplace
* Stripe for payment processing, thanks to the official [Spree Stripe gem](https://github.com/spree/spree_stripe)
* [Devise](https://github.com/heartcombo/devise) for authentication
* [Sidekiq](https://github.com/mperham/sidekiq) for background jobs
* PostgreSQL as a database
* Redis for caching
* [Sentry](https://sentry.io) for error/performance monitoring

You don't need to install additional tools or libraries to start developing with Spree Starter. Everything is already set up for you.

If you like what you see, consider giving this repo a GitHub star :star:

Thank you for supporting Spree open-source :heart:

## Local Installation

Please follow [Spree Quickstart guide](https://spreecommerce.org/docs/developer/getting-started/quickstart) to setup your Spree application using the Spree starter.

## Deployment

Please follow [Deployment guide](https://spreecommerce.org/docs/developer/deployment/render) to quickly deploy your production-ready Spree application.

## Customizing

Please follow [Customization guide](https://spreecommerce.org/docs/developer/customization/quickstart) to learn how to customize and extend your Spree application.

## Running tests

This repository is pre-configured for running tests of your Spree customizations. To run the full test suite, just type:

```bash
bundle exec rspec
```

## Spree 5 Announcement & Demo

[![Spree Commerce 5 version](https://vendo-production-res.cloudinary.com/image/upload/w_2000/q_auto/v1742985405/docs/github/Spree_Commerce_open-source_eCommerce_myzurl.jpg)](https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/)

We’re thrilled to unveil [Spree 5](https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/
) — the most powerful and feature-packed open-source release in Spree Commerce’s history, including:
- A completely revamped Admin Dashboard experience: boost your team's productivity 
- A Mobile-First, No-code Customizable Storefront: raise conversions and loyalty
- New integrations: a native [Stripe integration](https://github.com/spree/spree_stripe), and also Stripe Connect, Klaviyo integrations available with the Enterprise Edition
- Enterprise Edition Admin Features: Audit Log, [Multi-Vendor Marketplace](https://spreecommerce.org/marketplace-ecommerce/), [Multi-tenant / White-label SaaS eCommerce](https://spreecommerce.org/multi-tenant-white-label-ecommerce/)

Read the [full Spree 5 announcement here](https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/).

Check out the [Spree 5 demo](https://demo.spreecommerce.org/) for yourself.

## Troubleshooting

### libvips error

If you encounter an error like the following:

```bash
LoadError: Could not open library 'vips.so.42'
```

Please check that libvips is installed with `vips -v`, and if it is not installed, follow [installation instructions here](https://www.libvips.org/install.html).

## Join the Community 

[Join our Slack](https://slack.spreecommerce.org) to meet other 6k+ community members and get some support.

## Need more support?

[Contact us](https://spreecommerce.org/contact/) for enterprise support and custom development services. We offer:
  * migrations and upgrades,
  * delivering your Spree application,
  * optimizing your Spree stack.

## Enterprise Edition 

Besides enterprise support we also offer the Spree Commerce [Enterprise Edition](https://spreecommerce.org/spree-commerce-version-comparison-community-edition-vs-enterprise-edition/) that gives you all the tools you need to launch your store or marketplace and provides you with ready-to-use integrations that will reduce your project's development time and cost.

With the Enterprise Edition you could build:

### A [Multi-vendor marketplace](https://spreecommerce.org/use-cases/multi-vendor-marketplace-demo/)
Run your own marketplace with multiple suppliers, each with a dedicated supplier dashboard
<img alt="Spree Commerce - Marketplace" src="https://github.com/spree/spree/assets/12614496/c4ddd118-df4c-464e-b1fe-d43862e5cf25">

### A [B2B eCommerce](https://spreecommerce.org/use-cases/headless-b2b-ecommerce/)
Start capturing 6+ figure orders from resellers with safe payments and a checkout process that fits your business model
<img alt="Spree Commerce - B2B eCommerce" src="https://github.com/spree/spree/assets/12614496/e0a184f6-31ad-4f7f-b30b-6f8a501b6f63">

### [Wholesale eCommerce](https://spreecommerce.org/use-cases/wholesale-ecommerce/)
Run your wholesale operation the way your retail partners expect
<img alt="Spree Commerce - Wholesale" src="https://github.com/spree/spree/assets/12614496/bac1e551-f629-47d6-a983-b385aa65b1bd">

### A [white-label SaaS or multi-tenant eCommerce](https://spreecommerce.org/multi-tenant-white-label-ecommerce/) platform
Launch a [multi-tenant eCommerce platform](https://spreecommerce.org/multi-tenant-white-label-ecommerce/) for your customers, resellers, affiliates in any configuration, eg. B2B2B, B2B2C, B2B2E
<img alt="Spree Commerce - Multi-store" src="https://github.com/spree/spree/assets/12614496/cf651354-6180-4927-973f-c650b80ccdb0">

To get access to Spree Enterprise (Vendo), contact our [Sales team](https://spreecommerce.org/get-started/)
