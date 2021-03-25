Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :reviews, only: [:create]
      resources :images, only: [:create]
    end
end
get '*path', to: 'pages#index', via: :all
end