require 'test_helper'

class RecordConfigsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @record_config = record_configs(:one)
  end

  test "should get index" do
    get record_configs_url, as: :json
    assert_response :success
  end

  test "should create record_config" do
    assert_difference('RecordConfig.count') do
      post record_configs_url, params: { record_config: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show record_config" do
    get record_config_url(@record_config), as: :json
    assert_response :success
  end

  test "should update record_config" do
    patch record_config_url(@record_config), params: { record_config: {  } }, as: :json
    assert_response 200
  end

  test "should destroy record_config" do
    assert_difference('RecordConfig.count', -1) do
      delete record_config_url(@record_config), as: :json
    end

    assert_response 204
  end
end
