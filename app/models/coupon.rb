class Coupon
  include Mongoid::Document
  field :code , type: String
  field :redeemed, type: Boolean

  belongs_to :offers
end
