class MenuItem < ActiveRecord::Base
  attr_accessible :description, :dietarynote, :mealtype, :prepnote, :price, :price, :title
  #has_paper_trail
  has_and_belongs_to_many :menus
  validates_inclusion_of :mealtype, :in => ["SHARE", "STARTERS", "FLATBREAD", "MAINS", "DESSERT"]
  def mealtype
    read_attribute(:mealtype)
  end
  def mealtype= (value)
    write_attribute(:mealtype, value)
  end
end
