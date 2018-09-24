require 'rails_helper'

RSpec.describe 'home page' do
  it 'returns 200 HTTP status' do
    visit '/'
    expect(page).to have_http_status('200')
  end
end
