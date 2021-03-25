class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :img_url, :slug

  has_many :reviews
  has_many :images
end
