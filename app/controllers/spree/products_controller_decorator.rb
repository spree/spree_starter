Spree::ProductsController.class_eval do
  respond_to :html, :json

  def index
    @searcher = build_searcher(params.merge(include_images: true))
    @products = @searcher.retrieve_products
    @taxonomies = Spree::Taxonomy.includes(root: :children)
    respond_to do |format|
      format.html { render layout: 'application' }
      format.json do
        render json: @products,
               each_serializer: Spree::ProductSerializer,
               adapter: :json, root: 'products'
      end
    end
  end
end
