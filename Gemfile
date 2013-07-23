source 'https://rubygems.org'

# This is a bundler 1.2.x directive that we use to specify the ruby
# version on Heroku.
ruby '2.0.0'

gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'pg'
gem 'unicorn'
gem 'hooves', require: 'hooves/default' # make unicorn the default for rails s

gem 'better_errors' # more awesome error messages
gem 'binding_of_caller' # REPL in browser during error

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'slim', '~> 1.3'
  gem 'slim-rails'
  gem 'compass-rails'
  gem 'sassy-buttons'
  gem 'fittext'
  gem 'font-awesome-sass-rails'
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :development do
  gem 'letter_opener' # view emails in the browser during dev
end

# for now, force jquery-ui-rails to lower than version 3
# because activeadmin 0.6.0 is not compatible.
# http://stackoverflow.com/questions/16844411/rails-active-admin-deployment-couldnt-find-file-jquery-ui
# https://github.com/gregbell/active_admin/commit/1d29474c489d558d1fe0aad3392db312164bab0f
gem 'jquery-rails', "< 3.0.0"

gem 'jquery-ui-rails'
gem 'ruby-prof'
gem 'sprockets-sass'
gem 'activeadmin'


# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
