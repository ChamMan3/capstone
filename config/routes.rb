Rails.application.routes.draw do
  resources :articles
  resources :folders
  resources :songs
  resources :artists
  resources :albums
  resources :users
  resources :sessions, only: [:create]
  
  get '/hello', to: 'application#hello_world'


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  get "/sessions", to: "sessions#index"
  delete "/logout", to: "sessions#delete"
end
