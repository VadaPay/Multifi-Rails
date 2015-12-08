class Offer
  include Mongoid::Document
  field :title, type: String
  field :details, type: String
  field :picture, type: String
  field :expiry, type: Time
  field :termsconditions, type: String
  field :theme, type: String
  field :redemptionmethod, type: String
  field :url, type: String
  field :companyname, type: String
  field :logo, type: String
  field :address1, type: String
  field :address2, type: String
  field :city, type: String
  field :state, type: String
  field :zip, type: String
  field :country, type: String
  field :phone, type: String
  field :website, type: String

  belongs_to :user
end
