class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :comment, :score, :restaurant_id, :created_at
end
