require 'rails_helper'

RSpec.describe 'Home Page', type: :feature do
  describe 'visiting the home page' do
    before do
      visit '/'
    end

    it 'loads successfully' do
      expect(page.status_code).to eq(200)
    end
  end
end
