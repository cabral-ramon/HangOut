Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

 namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :index]
   resource :session, only: [:create, :destroy, :show]
   resources :groups, only: [:create, :show, :update, :index, :destroy] do
      resources :comments, only: [:create]
      resources :memberships, only: [:create, :index]
      resources :events, only: [:create]
   end
   resources :comments, only: [:destroy]
   resources :events, only: [:index, :show]
   resources :rsvps, only: [:create]
   resources :tags, only: [:create]
 end

 get 'api/search', to: 'api/groups#search'
  delete 'api/groups/:group_id/memberships', to: 'api/memberships#destroy'
  delete 'api/events/:event_id/rsvps', to: 'api/rsvps#destroy'

end
