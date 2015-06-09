Rails.application.routes.draw do
  resources :users, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :activities#, only: [:create, :new, :show, :index]
    resources :users, only: [:show, :index]
  end

  root to: 'static_pages#root'
end
