module Api
  class ActivitiesController < ApiController
    def create
      @activity = Activity.new(activity_params)

      if @activity.save
        render json: @activity
      else
        render json: @activity.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @activity = Activity.find(params[:id])
      @activity.destroy
      render json: {}
    end

    def index
      @activities = Activity.all.includes(:reviews)
    end

    def show
      @activity = Activity.find(params[:id])
      @reviews = @activity.reviews.includes(:user)
    end

    private

    def activity_params
      params.require(:activity).permit(:title, :description, :image_url, :location)
    end
  end
end
