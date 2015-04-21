require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter  => "postgresql",
  :database => "carddata"
)

require './models/cards.rb'


get '/' do
  erb :index
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
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end
# Create a new card

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

# Update an existing card

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
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
