Rails.application.routes.draw do
  get '/record_configs/policies', to: 'record_configs#policies'
  resources :record_configs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  match '*path', to: 'application#route', via: :all
end
