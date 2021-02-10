Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      namespace :admin do
        get 'settings/policies', to: 'settings#policies_show'

        get 'settings', to: 'settings#show'
        put 'settings', to: 'settings#update'
      end
    end
  end

  match '*path', to: 'application#route', via: :all
end
