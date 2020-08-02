require 'test_helper'

class EnrollsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enroll = enrolls(:one)
  end

  test "should get index" do
    get enrolls_url, as: :json
    assert_response :success
  end

  test "should create enroll" do
    assert_difference('Enroll.count') do
      post enrolls_url, params: { enroll: { consent: @enroll.consent, dogage: @enroll.dogage, dogbreed: @enroll.dogbreed, dogname: @enroll.dogname, dogweight: @enroll.dogweight, email: @enroll.email, enddate: @enroll.enddate, firstname: @enroll.firstname, lastname: @enroll.lastname, needs: @enroll.needs, phone: @enroll.phone, pickup: @enroll.pickup, questions: @enroll.questions, startdate: @enroll.startdate, vaccine: @enroll.vaccine } }, as: :json
    end

    assert_response 201
  end

  test "should show enroll" do
    get enroll_url(@enroll), as: :json
    assert_response :success
  end

  test "should update enroll" do
    patch enroll_url(@enroll), params: { enroll: { consent: @enroll.consent, dogage: @enroll.dogage, dogbreed: @enroll.dogbreed, dogname: @enroll.dogname, dogweight: @enroll.dogweight, email: @enroll.email, enddate: @enroll.enddate, firstname: @enroll.firstname, lastname: @enroll.lastname, needs: @enroll.needs, phone: @enroll.phone, pickup: @enroll.pickup, questions: @enroll.questions, startdate: @enroll.startdate, vaccine: @enroll.vaccine } }, as: :json
    assert_response 200
  end

  test "should destroy enroll" do
    assert_difference('Enroll.count', -1) do
      delete enroll_url(@enroll), as: :json
    end

    assert_response 204
  end
end
