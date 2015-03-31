Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, :defaults => { :format => :json } do
    resources :recipes
    resources :food_preferences, only: :index
    resources :food_types, only: :index
  end

  resources :recipes, only: [:new, :create]
end
