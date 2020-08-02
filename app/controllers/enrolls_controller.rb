class EnrollsController < ApplicationController
  before_action :set_enroll, only: [:show, :update, :destroy]

  # GET /enrolls
  def index
    @enrolls = Enroll.all

    render json: @enrolls
  end

  # GET /enrolls/1
  def show
    render json: @enroll
  end

  # POST /enrolls
  def create
    @enroll = Enroll.new(enroll_params)

    if @enroll.save
      render json: @enroll, status: :created, location: @enroll
    else
      render json: @enroll.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /enrolls/1
  def update
    if @enroll.update(enroll_params)
      render json: @enroll
    else
      render json: @enroll.errors, status: :unprocessable_entity
    end
  end

  # DELETE /enrolls/1
  def destroy
    @enroll.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enroll
      @enroll = Enroll.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def enroll_params
      params.require(:enroll).permit(:firstname, :lastname, :phone, :email, :dogname, :dogage, :dogbreed, :dogweight, :startdate, :enddate, :questions, :consent, :needs, :vaccine, :pickup)
    end
end
