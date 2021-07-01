Rails.application.routes.draw do
  namespace :api do
    get "/memes" => "memes#index"
    get "/memes/:id" => "memes#show"
    post "/memes" => "memes#create"
    patch "/memes/:id" => "memes#update"
    delete "/memes/:id" => "memes#destroy"

    get "/users" => "users#index"
    get "/users/:id" => "users#show"
    post "/users" => "users#create"
    patch "/users/:id" => "users#update"
    delete "/users/:id" => "users#destroy"

    post "/sessions" => "sessions#create"

    get "/*path" => proc { [200, {}, [ActionView::Base.new.render(file: 'public/index.html')]] }
  end
end