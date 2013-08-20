class MenuItem < ActiveRecord::Base
  attr_accessible :description, :dietarynote, :mealtype, :prepnote, :price, :price, :title
  #has_paper_trail
end
