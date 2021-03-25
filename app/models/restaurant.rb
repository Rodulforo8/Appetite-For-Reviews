class Restaurant < ApplicationRecord

has_many :reviews

has_many :images

before_create :slugify

def slugify
    self.slug = name.parameterize
end

    
end
