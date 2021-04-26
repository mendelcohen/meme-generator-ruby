class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "index.json.jb"
  end

  def show
    @user = User.find_by(id: params[:id])
    render "show.json.jb"
  end

  def create
    @user = User.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email]
      password: params[:password]
      password_conformation: params[:password_conformation]
    )
    if @user.save
      render "show.json.jb"
    else
      render json: { errors: @user.errors.full_messages}, status: :bad_request
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.first_name = params[:first_name] || @user.first_name
    @user.last_name = params[:last_name] || @user.last_name
    @user.email = params[:email] || @user.email
    # @user.password = params[:password]
    # @user.password_confirmation = params[:password_confirmation]
    if @user.save
      render "show.json.jb"
    else
      render json: { errors: @user.errors.full_messages}, status: :bad_request
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.delete
    render json: { message: "USER DELETED" }
  end

end
