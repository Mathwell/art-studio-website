class ArtworksController < ApplicationController
  def show
   @artwork=Artwork.find(params[:id])
   render json: @artwork
  end

  def index
    @artworks=Artwork.all
   render json: @artworks
  end
end