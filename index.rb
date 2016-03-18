require 'sinatra'

# tested from remote server
set :environment, :production
#frontend located in root/frontend
set :root, File.dirname(__FILE__)
set :public_folder, Proc.new{File.join(root,'frontend/app')}


#set the home url
get '/' do
  redirect '/starter.html'
end
