IvanTheTerriblesBlog::Application.routes.draw do
  get 'posts/page/:page', to:'posts#index', page: :page
  get 'posts/:id/page/:page', to:'posts#show', page: :page

  resources :posts do
    resources :comments do
      resources :replies
    end
  end

  root :to => 'posts#index'
end

