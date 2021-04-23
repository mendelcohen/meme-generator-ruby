class Api::MemesController < ApplicationController

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
      top_text: params[:top_text],
      img_url: params[:img_url],
      bottom_text: params[:bottom_text],
      # user_id: current_user.id
    )
    if @meme.save
      render "show.json.jb"
    else
      render json: { errors: @user.errors.full_messages}, status: :bad_request
    end
  end

  def update
    @meme = Meme.find_by(id: params[:id])
    @meme.top_text = params[:top_text] || @meme.top_text
    @meme.img_url = params[:img_url] || @meme.img_url
    @meme.bottom_text = params[:bottom_text] || @meme.bottom_text
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
