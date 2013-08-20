ActiveAdmin.register MenuItem do
  form do |f|
    f.inputs "Menu Item" do
    	f.input :title
    	f.input :description
      f.input :mealtype, :as => :radio, :required => true, :collection => ["SHARE", "STARTERS", "FLATBREAD", "MAINS", "DESSERT"]
      f.input :dietarynote
      f.input :prepnote
      f.input :price
    end
    f.actions
  end   
end
