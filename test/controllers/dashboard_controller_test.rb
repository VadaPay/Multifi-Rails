require 'test_helper'

class DashboardControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get redeem" do
    get :redeem
    assert_response :success
  end

  test "should get offers" do
    get :offers
    assert_response :success
  end

  test "should get customers" do
    get :customers
    assert_response :success
  end

  test "should get groups" do
    get :groups
    assert_response :success
  end

  test "should get sources" do
    get :sources
    assert_response :success
  end

  test "should get lists" do
    get :lists
    assert_response :success
  end

  test "should get insights" do
    get :insights
    assert_response :success
  end

  test "should get reports" do
    get :reports
    assert_response :success
  end

end
