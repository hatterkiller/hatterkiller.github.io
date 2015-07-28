require 'bundler/setup'
Bundler.require
require 'sinatra/reloader' if development?
require 'open-uri'
require "sinatra/json"
require 'uri'
require 'json'

require './models/bookmark.rb'

get '/' do
 @bookmarks = Bookmark.all
 
 erb :index
end
post '/create' do

 url1 = params[:url]
 redirect '/api/site?url='+url1
 
end


get '/api/site' do
 url1 = params[:url]
 url2 = URI.escape(url1)
 logger.info url2
 price = open('http://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name='+url2).read
 data = JSON.load(price)
 pricecheck= data['median_price']
  
 
 
 html = Nokogiri::HTML.parse(open('https://steamcommunity.com/market/listings/730/'+url2))
 title = html.css('title').text
 titles = title.sub(/^Steam Community Market :: Listings for / , '')
 Bookmark.create(title: titles, url: pricecheck)
 redirect '/'


 
end
