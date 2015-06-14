module Api
  class UsersController < ApiController
    def index
      @users = User.all
    end

    def show
      @user = User.find(params[:id])
      @activities = @user.activity_wants.includes(:reviews)
    end
  end
end
