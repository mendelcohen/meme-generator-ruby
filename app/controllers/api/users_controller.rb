class Api::UsersController < ApplicationController

  def index
    @users = "Path created"
    render "index.json.jb"
  end

end
