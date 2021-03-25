class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :img_url, :restaurant_id 
end
