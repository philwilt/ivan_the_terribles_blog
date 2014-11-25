class CommentSweeper < ActionController::Caching::Sweeper
  observe Comment

  def after_save(comment)
    expire_cache(comment)
  end

  def after_destroy(comment)
    expire_cache(comment)
  end

  def expire_cache(comment)
    expire_action(controller: 'comments', action: %w( index ))
  end
end
