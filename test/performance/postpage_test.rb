require 'test_helper'
require 'rails/performance_test_help'

class PostpageTest < ActionDispatch::PerformanceTest
    def test_post
      get '/posts/1'
    end
end
