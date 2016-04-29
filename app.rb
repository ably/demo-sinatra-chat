require 'dotenv'
require 'sinatra'
require 'tilt/erubis'
require 'sinatra/json'
require "sinatra/content_for"

require 'ably'

Dotenv.load

if !ENV['ABLY_API_KEY']
  abort "ABLY_API_KEY is required.\nSign up for a free API key at https://www.ably.io and update .env or set the environment variable"
end

ably = Ably::Rest.new(ENV['ABLY_API_KEY'])

get '/' do
  erb :home
end

get '/login' do
  if params[:nickname]
    erb :logged_in, locals: { nickname: params[:nickname] }
  else
    redirect to('/?error=Nickname+is+required')
  end
end

get '/token' do
  if !params[:nickname]
    halt 400, "Nickname is required"
  else
    token = ably.auth.create_token_request(client_id: params[:nickname])
    logger.info "Token created for user #{token[:client_id]}"
    json token
  end
end
