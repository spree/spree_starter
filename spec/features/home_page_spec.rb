require 'rails_helper'

RSpec.describe 'home page' do
  it 'renders the dummy view' do
    visit '/'
    expect(page).to have_content('Spark Solutions')
  end
end
