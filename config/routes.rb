Rails.application.routes.draw do
  namespace :api do
    get "/memes" => "memes#index"

    get "/users" => "users#index"

  end
end
