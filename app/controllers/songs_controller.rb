class SongsController < ApplicationController

    def index
        render json: Song.all
     end
     
     def show
         song = find_params 
         render json: song
     end
 
     def create
         song = Song.create!(song_params)
         render json: song, status: :created
     end
 
     def update
         song = find_params 
         song.update(song_params)
         render json: song
     end
 
     def destroy
         song = find_params
         song.destroy
         head :no_content
     end



    private 

    def find_params
        Song.find(params[:id])
    end

    def song_params
        params.permit(:title, :artist_id, :folder_id, :album_id, :lyrics)
    end
end
