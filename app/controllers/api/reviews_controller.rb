module Api
  class ReviewsController < ApiController

    def create
      @review = current_activity.reviews.new(review_params)
      @review.user_id = current_user.id
      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @review = Review.find(params[:id])
      if @review.update_attributes(review_params)
        render json: @review
      else
        render json: @review.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def destroy
      @review = Review.find(params[:id])
      @review.destroy
      render json: {}
    end

    private

    def current_activity
      @activity = Activity.find(params[:activity_id])
    end

    def review_params
      params.require(:review).permit(:activity_id, :user_id, :body, :rating)
    end
  end
end
