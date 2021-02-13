Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      namespace :admin do
        get 'configs/policies', to: 'configs#policies_show'
        get 'configs/modes', to: 'configs#modes_show'

        get 'configs', to: 'configs#show'
        put 'configs', to: 'configs#update'
      end
    end
  end

  match '*path', to: 'application#route', via: :all
end
