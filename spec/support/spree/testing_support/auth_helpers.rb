module Spree
  module TestingSupport
    module AuthHelpers
      def login_button
        Spree.t(:login)
      end

      def logout_button
        Spree.t(:logout)
      end

      def log_in(email:, password: nil, remember_me: true, locale: nil, checkout: false)
        if checkout
          visit "/checkout/#{order.token}"
          find('a[href*="/user/sign_in"]').click
        else
          visit "/user/sign_in?locale=#{locale}"
        end

        fill_in 'user_email', with: email, wait: 5
        fill_in 'user_password', with: password, wait: 5
        click_button login_button

        expect(page).to have_content 'Signed in successfully'
      end

      def log_out
        visit '/account'
        click_on logout_button

        expect(page).to have_content 'Signed out successfully'
      end
    end
  end
end
