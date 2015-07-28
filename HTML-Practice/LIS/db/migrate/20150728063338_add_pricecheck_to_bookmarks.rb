class AddPricecheckToBookmarks < ActiveRecord::Migration
  def change
    add_column :bookmarks, :pricecheck, :string
  end
end
