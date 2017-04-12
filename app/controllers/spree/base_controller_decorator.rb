Spree::BaseController.class_eval do
  def render_404
    respond_to do |type|
      type.html { render "errors/#{@rescue_response}", status: @status_code, formats: [:html] }
      type.all  { head :not_found }
    end
  end
end
