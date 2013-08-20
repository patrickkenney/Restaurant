worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)


unless ENV['RAILS_ENV'] == 'development'
  timeout 15
else
  timeout 60*10
end

preload_app true

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM an sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  defined?(ActiveRecord::Base) and ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  end

  if defined?(ActiveRecord::Base)
    config = Rails.application.config.database_configuration[Rails.env]
    config['prepared_statements'] = false
    ActiveRecord::Base.establish_connection(config)
  end
end
