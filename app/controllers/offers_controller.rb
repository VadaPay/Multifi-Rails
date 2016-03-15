# require 'securerandom'
require 'coupon_code'

class OffersController < ApplicationController

  before_filter :authenticate_user!, only: [:create]


  def index
    puts(params[:scheduled])
    
    if params[:scheduled] == false
      respond_with Offer.where({user_id: current_user.id, isDraft: false})
    else
      respond_with Offer.where({user_id: current_user.id, isDraft: false, isScheduled: true})
    end
  end

  def show
    respond_with Offer.find(params[:id])
  end

  def create


    offer = Offer.create(post_params.merge(user_id: current_user.id))
    puts(offer)
    coupons_limit = params[:couponlimit]
    puts(coupons_limit)
    i = 0

    while i < coupons_limit do

      ccode = CouponCode.generate
      #
      puts(ccode)

      puts(offer._id)


      coupon = Coupon.new()

      coupon.code = ccode
      coupon.redeemed = false
      coupon.offers_id = offer._id

      coupon.save

      i = i + 1
    end
    respond_with offer
  end

  private
  def post_params
    params.require(:offer).permit(:details, :title, :termsconditions, :url, :address1, :address2, :city, :theme, :companyname, :couponlimit, :isDraft, :expiry, :isScheduled, :scheduledFor)
  end

end
