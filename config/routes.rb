IvanTheTerriblesBlog::Application.routes.draw do
  get 'posts/page/:page', to:'posts#index', page: :page
  get 'posts/:id/page/:page', to:'posts#show', page: :page

  resources :posts
  resources :comments
  resources :replies

  root :to => 'posts#index'

end

