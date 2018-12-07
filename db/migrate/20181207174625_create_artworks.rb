class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :author
      t.string :description
      t.string :url_s
      t.string :url_o
      t.string :title
      t.string :photo_id

      t.timestamps
    end
  end
end
