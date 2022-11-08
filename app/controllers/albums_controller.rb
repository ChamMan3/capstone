class AlbumsController < ApplicationController
    def index
        render json: Album.all
     end
     
     def show
         album = find_params 
         render json: album
     end


     private 
 
     def find_params
         Album.find(params[:id])
     end
 
end
