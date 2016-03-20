# require 'securerandom'
require 'coupon_code'

# require 'logging'



class OffersController < ApplicationController

  before_filter :authenticate_user!, only: [:index , :create, :update]


  def index

    # log = Logging.logger(STDOUT)

    # logger.debug "this debug message will not be output by the logger"

    # if params[:scheduled] == false
    respond_with Offer.where({user_id: current_user.id})
    # else
    # respond_with Offer.where({user_id: current_user.id, isDraft: false, isScheduled: true})
    # end
  end


  def show
    respond_with Offer.find(params[:id])
  end

  def create


    offer = Offer.create(post_params.merge(user_id: current_user.id))
    Rails.logger.info offer
    coupons_limit = params[:couponlimit].to_i
    # puts(coupons_limit)
    i = 0

    if (params[:isDraft] != true)
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
    end
    respond_with offer
  end

  def update
    offer = Offer.find(params[:id])



    offer.update(post_params)


    if (params[:isDraft] != true)

      coupons_limit = params[:couponlimit].to_i

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

    end

    respond_with offer
  end

  private
  def post_params
    params.require(:offer).permit(:details, :title, :termsconditions, :url, :address1, :address2, :city, :theme, :companyname, :couponlimit, :isDraft, :expiry, :isScheduled, :scheduledFor, :remote_offer_url)
  end

end
