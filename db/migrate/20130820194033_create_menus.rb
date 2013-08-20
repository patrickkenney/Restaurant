class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :menutype
      t.timestamps
    end
    create_table :menu_items_menus do |t|
    	t.belongs_to :menu
    	t.belongs_to :menu_item
    end
  end
end
