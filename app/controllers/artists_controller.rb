class ArtistsController < ApplicationController
    def index
        render json: Artist.all
     end
     
     def show
         artist = find_params 
         render json: artist
     end
 
     private 
 
     def find_params
         Artist.find(params[:id])
     end
 

end
