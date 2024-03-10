# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "sortablejs" # @1.15.2
pin_all_from Spree::Backend::Engine.root.join("app/javascript/controllers"), under: "controllers", to: "controllers"
pin "request_utility", to: "request_utility"
