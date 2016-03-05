class CouponsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Couponcode.all
  end

  def create
    coupons_limit = params[:limit]
    i = 0
    while i < coupons_limit do
      Couponcode.create()
    end
  end

end
