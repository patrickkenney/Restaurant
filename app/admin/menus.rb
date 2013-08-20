ActiveAdmin.register Menu do
  form do |f|
    f.inputs "Menu" do
      f.input :menutype, :as => :radio, :collection => ["LUNCH", "DINNER"]
      f.input :menu_items, :as => :check_boxes, :collection => MenuItem.all
    end
    f.actions
  end   
end
