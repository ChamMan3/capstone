class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index, :show]

    def index
        render json: User.all 
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_params 
        user.update(user_params)
        render json: user
    end

    def destroy
        user = find_params
        user.destroy
        head :no_content
    end

    private 
    
    def find_params
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
