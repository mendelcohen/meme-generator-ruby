Rails.application.routes.draw do
  namespace :api do
    get "/memes" => "memes#index"
    get "/memes/:id" => "memes#show"
    post "/memes" => "memes#create"
    patch "/memes/:id" => "memes#update"
    delete "/memes/:id" => "memes#destroy"

    get "/users" => "users#index"

  end
end
