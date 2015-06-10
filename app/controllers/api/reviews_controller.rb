module Api
  class ReviewsController < ApiController

    def create
      @review = current_activity.reviews.new(review_params)

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
      if params[:id]
        @review = Review.find(params[:id])
        @activity = @review.activity
      elsif params[:review]
        @activity = Activity.find(params[:review][:activity_id])
      end
    end

    def review_params
      params.require(:review).permit(:activity_id, :user_id, :body, :rating)
    end
  end
end
