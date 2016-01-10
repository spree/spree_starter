Spree::ProductsController.class_eval do
  include ApiHelper
  layout 'application'
  respond_to :html, :json

  def index
    @searcher = build_searcher(params.merge(include_images: true))
    @products = @searcher.retrieve_products.includes(:variants, :master, :properties)
    @taxonomies = Spree::Taxonomy.includes(root: :children)
    respond_to do |format|
      format.html
      format.json do
        render json: @products,
               adapter: :json,
               root: 'products',
               meta: json_pagination(@products),
               include: '**'
      end
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @product, include: '**' }
    end
  end
end
