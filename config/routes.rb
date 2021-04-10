Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      namespace :admin do
        get 'configs/policies', to: 'settings#policies_show'
        get 'configs/modes', to: 'settings#modes_show'

        get 'configs', to: 'settings#show'
        put 'configs', to: 'settings#update'

        get 'statuses/:id', to: 'statuses#show'
        put 'statuses/:id', to: 'statuses#update'
      end
    end
  end

  match '*path', to: 'application#route', via: :all
end
