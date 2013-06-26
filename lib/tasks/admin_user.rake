namespace :gothic do
    desc 'Add a default admin user'
    task :add_default_user => :environment do
        u=AdminUser.new(:email => "admin@example.com", :password => 'password', :password_confirmation => 'password')
        u.save
    end
end
