# frozen_string_literal: true

require "spec_helper"

describe "app" do
  context "run local server" do
    before do
      fork { system('echo -en "spree@example.com" | bin/start-docker') }
    end
    it "starts local services" do
      wait_for_docker
      res = Net::HTTP.get_response(URI("http://127.0.0.1:4000/api/v2/storefront/taxons"))
      expect(res.code).to eq('200')
    end
  end
end
