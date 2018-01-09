Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :index]
   resource :session, only: [:create, :destroy, :show]
   resources :groups, only: [:create, :show, :update, :index, :destroy] do
     resources :memberships, only: [:create, :index]
     resources :events, only: [:create, :show]
   end
   resources :events, only: [:index]
 end

  delete 'api/groups/:group_id/memberships', to: 'api/memberships#destroy'
end
