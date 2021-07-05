class Api::MemesController < ApplicationController
  
  before_action :authenticate_user, except: [:index, :show]

  def index
    @memes = Meme.all
    render "index.json.jb"
  end

  def show
    @meme = Meme.find_by(id: params[:id])
    render "show.json.jb"
  end

  def create
    @meme = Meme.new(
      top_text: params[:topText],
      img_url: params[:imgUrl],
      bottom_text: params[:bottomText],
      likes: params[:likes],
      user_id: current_user.id
    )
    if @meme.save
      render "show.json.jb"
    else
      render json: { errors: @meme.errors.full_messages}, status: :bad_request
    end
  end

  def update
    @meme = Meme.find_by(id: params[:id])
    @meme.top_text = params[:topText] || @meme.top_text
    @meme.img_url = params[:imgUrl] || @meme.img_url
    @meme.bottom_text = params[:bottomText] || @meme.bottom_text
    @meme.likes = params[:likes] || @meme.likes
    if @meme.save
      render "show.json.jb"
    else
      render json: { errors: @user.errors.full_messages}, status: :bad_request
    end
  end

  def destroy
    @meme = Meme.find_by(id: params[:id])
    @meme.delete
    
    render json: { message: "MEME DELETED" }
  end

end
