require 'dotenv'
require 'sinatra'

Dotenv.load

if !ENV['ABLY_API_KEY']
  abort "ABLY_API_KEY is required.\nSign up for a free API key at https://www.ably.io and update .env or set the environment variable"
end

get '/' do
  erb :home
end
