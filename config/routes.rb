Rails.application.routes.draw do
  get 'composure/index'
  root 'composure#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
