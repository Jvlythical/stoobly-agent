Rails.application.routes.draw do
  resources :record_configs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  match '*path', to: 'application#route', via: :all
end
