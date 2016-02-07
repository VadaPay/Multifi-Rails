class OffersController < ApplicationController

  before_filter :authenticate_user!, only: [:create]


  def index
    respond_with Offer.all
  end

  def show
    respond_with Offer.find(params[:id])
  end

  def create
    respond_with Offer.create(post_params.merge(user_id: current_user.id))
  end

  private
  def post_params
    params.require(:offer).permit(:details, :title, :termsconditions, :url, :address1, :address2, :city, :theme, :companyname)
  end

end
