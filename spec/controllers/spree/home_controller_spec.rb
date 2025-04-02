require 'rails_helper'

RSpec.describe Spree::HomeController, type: :controller do
  describe 'GET #index' do
    subject { get :index }

    it 'returns a successful response' do
      expect(subject).to be_successful
    end

    it 'renders the index template' do
      expect(subject).to render_template(:index)
    end
  end
end
