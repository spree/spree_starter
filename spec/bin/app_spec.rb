# frozen_string_literal: true

require "spec_helper"

describe "app" do
  context "run local server" do
    before do
      fork { system('bin/setup-no-docker') }
    end
    it "starts local services" do
      wait_for_server
      expect(Net::HTTP.get_response(URI("http://127.0.0.1:4000/admin/login")).code).to eq('200')
      expect(Net::HTTP.get_response(URI("http://127.0.0.1:4000/api/v2/storefront/taxons")).code).to eq('200')
    end
    after do
      system('kill -9 $(lsof -t -i:4000)')
    end
  end
end
