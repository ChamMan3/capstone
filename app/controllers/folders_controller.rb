class FoldersController < ApplicationController
    
    skip_before_action :authorized_user, only: [:create, :index, :destroy, :show, :patch, :update]

     def index
        render json: Folder.all
     end
     
     def show
         folder = find_params 
         render json: folder
     end
 
     def create
         folder = Folder.create!(folder_params)
         render json: folder, status: :created
     end
 
     def update
         folder = find_params 
         folder.update(folder_params)
         render json: folder
     end
 
     def destroy
         folder = find_params
         folder.destroy
         head :no_content
     end
 
     private 
 
     def find_params
         Folder.find(params[:id])
     end
 
     def folder_params
         params.permit(:title, :details, :user_id)
     end
end
