class ArticlesController < ApplicationController
    skip_before_action :authorized_user

     def index
        render json: Article.all
     end
     
     def show
         article = find_params 
         render json: article
     end
 
     def create
         article = Article.create!(article_params)
         render json: article, status: :created
     end
 
     def update
         article = find_params 
         article.update(article_params)
         render json: article
     end
 
     def destroy
         article = find_params
         article.destroy
         head :no_content
     end
 
     private 
 
     def find_params
         Article.find(params[:id])
     end
 
     def article_params
                                       
         params.permit(:title, :user_id, :body, :folder_id)
     end
end
