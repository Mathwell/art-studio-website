class ArtworksController < ApplicationController
  def show
   @artwork=Artwork.find(params[:id])
   render json: @artwork
  end

  def index
    q = params[:q]
    if q.blank?
      @artworks=Artwork.all
    else
    @artworks=Artwork.where(["TITLE LIKE ?", "%#{q}%"]).limit(100)
    end
    #@artworks=Artwork.all
   render json: @artworks
  end

  def create
    @artwork = Artwork.create(artwork_params)
    render json: @artwork, status: 201
  end

  private
  
 
   def artwork_params
     params.require(:artwork).permit(
       :title,
       :url_s
           )
   end

end