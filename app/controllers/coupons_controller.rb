class CouponsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]


  def index
  end



  def show
    valid_coupon = Coupon.where(offers_id: params[:id], redeemed: false).first
    Rails.logger.debug valid_coupon
    respond_with valid_coupon
  end

  def update
    redeemed_coupon = Coupon.where(code: params[:id])
    redeemed_coupon.update(redeemed: true )

    # get the offer

    offer = Offer.find(redeemed_coupon.offers_id)
    
    Rails.logger.debug offer
    respond_with offer
  end

  def create
  end

  def delete
  end

end
