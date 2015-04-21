require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter  => "postgresql",
  :database => "carddata"
)

require './models/cards.rb'

#Helper
def card_parameters
  request_body = JSON.parse(request.body.read.to_s)
  { title: request_body["title"], message: request_body["message"] }
end


get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end

get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end


get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

post '/api/cards' do
  # content_type :json
  # request_body = JSON.parse(request.body.read.to_s)
  # card_args = { title: request_body ["title"], message: request_body["message"] }
  card = Card.create(card_parameters)
  content_type :json
  card.to_json
end
# Create a new card

put '/api/cards/:id' do
  # # content_type :json
  # request_body = JSON.parse(request.body.read.to_s)
  card = Card.find(params[:id].to_i)
  card.update(card_parameters)
  content_type :json
  card.to_json
end

# Update an existing card

patch '/api/cards/:id' do
  # content_type :json
  # request_body = JSON.parse(request.body.read.to_s)
  card = Card.find(params[:id].to_i)
  card.update(card_parameters)
  content_type :json
  card.to_json
end
# Update an existing card

delete '/api/cards/:id' do
  content_type :json
  card = Card.delete(params[:id].to_i)
  card.to_json
end
# Delete an existing card





# CREATE DATABASE carddata;


# carddata=# CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
