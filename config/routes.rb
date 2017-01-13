# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'composure/index'
  root 'composure#index'

  # API routes
  scope '/api' do
    scope '/v1' do
      scope '/recipes' do
        get '/' => 'api_recipes#index'
        post '/' => 'api_recipes#create'
        scope '/:id' do
          get '/' => 'api_recipes#show'
          put '/' => 'api_recipes#update'
          scope '/recipe_steps' do
            get '/' => 'api_recipe_steps#index'
            post '/' => 'api_recipe_steps#create'

          end
        end
      end
    end
  end

  # This makes all routes not defined get intercepted by React Router
  get "*path" => "composure#index"

end
