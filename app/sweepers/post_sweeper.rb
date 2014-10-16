class PostSweeper < ActionController::Caching::Sweeper
  observe Post

  def after_save(post)
    expire_cache(post)
  end

  def after_destroy(post)
    expire_cache(post)
  end

  def expire_cache(post)
    expire_action '/posts'
    expire_action "/posts/#{post.id}"
  end
end
