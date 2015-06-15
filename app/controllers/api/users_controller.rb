module Api
  class UsersController < ApiController
    def index
      @users = User.all
    end

    def show
      @user = User.find(params[:id])
      @activities = @user.activity_wants.includes(:reviews)
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render :show
      else
        render json: {}
      end
    end

    private
    def user_params
      params.require(:user).permit(:image_url)
    end
  end
end
