class CommentSweeper < ActionController::Caching::Sweeper
  observe Comment

  def after_save(comment)
    expire_cache(comment)
  end

  def after_destroy(comment)
    expire_cache(comment)
  end

  def expire_cache(comment)
    expire_action '/comments'
    expire_action "/comments/#{comment.id}"
    expire_action "posts/#{comment.post_id}/comments/#{comment.id}"
    expire_action "posts/#{comment.post_id}"
  end
end
