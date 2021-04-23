Rails.application.routes.draw do
  namespace :api do
    get "/memes" => "memes#index"

    
  end
end
