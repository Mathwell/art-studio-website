class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :author, :description, :url_s, :url_o, :title, :photo_id
end
