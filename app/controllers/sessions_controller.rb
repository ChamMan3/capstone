class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:new , :create, :delete]


    def new
        render :new
    end
    
    # def create
    #     user_info = request.env['omniauth.auth']
    #     raise user_info # Your own session management should be placed here.
    # end

    def create
        user = User.find_by(name:params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Invalid Username or Password"}, status: :unauthorized
        end
    end

    def delete
        session.delete(:user_id)
        head :no_content
    end


end