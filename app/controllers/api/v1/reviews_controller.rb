module Api::V1
    class ReviewsController < ApplicationController 
        protect_from_forgery with: :null_session
        
        def create
            review = Review.new(review_params)

            if review.save
                render json: ReviewSerializer.new(review).serialized_json
            else
                render json: {error: review.errors.messages}, status: 422
        end
    end

        private

        def review_params
            params.require(:review).permit(:user, :comment, :restaurant_id)
        end
    end
end
