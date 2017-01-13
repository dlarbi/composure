# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'composure/index'
  root 'composure#index'

  # This makes all routes not defined get intercepted by React Router
  get "*path" => "composure#index"

end
