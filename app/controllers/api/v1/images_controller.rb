module Api::V1
    class ImagesController < ApplicationController 
        protect_from_forgery with: :null_session
        
        def create
            image = Image.new(restaurant_params)

            if image.save
                render json: ImageSerializer.new(image).serialized_json
            else
                render json: {error: image.errors.messages}, status: 422
        end
    end

        private

        def image_params
            params.require(:image).permit(:img_url, :restaurant_id)
        end
    end