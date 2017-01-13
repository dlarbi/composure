require 'test_helper'

class ComposureControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get composure_index_url
    assert_response :success
  end

end
