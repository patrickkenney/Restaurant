class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :title
      t.text :description
      t.string :dietarynote
      t.string :prepnote
      t.string :mealtype
      t.decimal :price, precision: 5, scale: 2

      t.timestamps
    end
  end
end
