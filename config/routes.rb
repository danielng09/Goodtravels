Rails.application.routes.draw do
  resources :users, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :activities do #, only: [:create, :new, :show, :index]
      get "search", on: :collection
    end
    resources :users, only: [:show, :index]
    resources :reviews, only: [:create, :update, :destroy]
  end

  root to: 'static_pages#root'
end
