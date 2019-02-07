require 'rails_helper'

RSpec.describe 'react sample', js: true do
  it 'renders the react component' do
    visit '/react_sample'
    expect(page).to have_content("I'm sample react/redux component")
  end
end
