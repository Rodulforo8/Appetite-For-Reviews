class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.string :slug

      t.timestamps
    end
  end
end
