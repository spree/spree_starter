require 'spec_helper'

describe 'API V2 Storefront Products Spec', type: :request do
  let(:store)                      { @default_store }
  let!(:products)                   { create_list(:product, 5, stores: [store]) }

  describe 'products#index' do
    context 'with no params' do
      before { get '/api/v2/storefront/products' }

      it 'returns all products' do
        expect(json_response['data'].count).to eq store.products.available.count
        expect(json_response['data'].first).to have_type('product')
      end
    end
  end
end
