module Api
  class WantsController < ApiController
    def create
      @want = current_user.wants.new(want_params)
      if @want.save
        render json: @want
      else
        render json: @want.error.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @want = current_user.wants.find_by_activity_id(params[:id])
      @want.destroy
      render json: {}
    end

    private
    def want_params
      params.require(:want).permit(:activity_id)
    end
  end
end
