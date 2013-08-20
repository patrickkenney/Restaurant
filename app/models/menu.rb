class Menu < ActiveRecord::Base
  has_and_belongs_to_many :menu_items
  attr_accessible :menutype, :menu_item_ids
end
