class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
   @notes = Note.all
   render json: @notes
  end

  def create
    @note = Note.new(title: params[:title], body: params[:body])
    if @note.save
      render json: @note
    else
      render json: { error: 'WRONG'}, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  # def update
  #   @note = Note.find(params[:id])
  #   @note.update(title: params[:title], body: params[:body])
  #   render json: @note
  # end



end
