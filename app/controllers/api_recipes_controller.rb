class ApiRecipesController < BaseApiController
  before_filter :find_recipe, only: [:show, :update]

  before_filter only: :create do |c|
    meth = c.method(:validate_json)
    meth.call (@json.has_key?('recipe') && @json['recipe'].responds_to?(:[]) && @json['recipe']['id'])
  end

  before_filter only: :update do |c|
    meth = c.method(:validate_json)
    meth.call (@json.has_key?('recipe'))
  end

  before_filter only: :create do |c|
    meth = c.method(:check_existence)
    meth.call(@recipe, "Recipe", "find_by_name(@json['recipe']['id'])")
  end

  def create
    if @recipe.present?
      render nothing: true, status: :conflict
    else
      @recipe = Recipe.new
       update_values :@recipe, @json['recipe']
    end
  end

  def index
    render json: Recipe.where('user_id = ?', @user.id)
  end

  def show
    render json: @recipe
  end

  def update
    @recipe.assign_attributes(@json['recipe'])
    if @recipe.save
        render json: @recipe
    else
        render nothing: true, status: :bad_request
    end
  end

 private
   def find_recipe
     @recipe = Recipe.find(params[:id])
     render nothing: true, status: :not_found unless @recipe.present? && @recipe.user == @user
   end
 end
