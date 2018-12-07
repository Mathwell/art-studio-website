Rails.application.routes.draw do
  get 'artworks/show'
  get 'artworks/index'
  get 'artworks/new'
  get 'artworks/create'
  get 'artworks/edit'
  get 'artworks/update'
  get 'artworks/destroy'
  get 'artworks/index'
  get 'artworks/show'
  get 'artwork/new'
  get 'artwork/create'
  get 'artwork/edit'
  get 'artwork/update'
  get 'artwork/destroy'
  get 'artwork/index'
  get 'artwork/show'
  resources :artworks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
