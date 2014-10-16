IvanTheTerriblesBlog::Application.routes.draw do
  get 'posts/page/:page', to:'posts#index', page: :page

  resources :posts
  resources :comments
  resources :replies

  root :to => 'posts#index'

end

