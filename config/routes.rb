Rails.application.routes.draw do
  resources :articles
  resources :folders
  resources :songs
  resources :artists
  resources :albums
  resources :users
  resources :sessions, only: [:create, :delete]
  
  get '/hello', to: 'application#hello_world'


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#delete"

  get 'auth/:provider/callback', to: 'sessions#create'
  get '/login', to: 'sessions#new'
end
