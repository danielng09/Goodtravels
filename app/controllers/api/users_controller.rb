module Api
  class UsersController < ApiController

    def index
      @users = User.all
      render json: @users, only: [:username, :id, :created_at]
    end

    def show
      @user = User.find(params[:id])
      render :show
    end
  end
end
