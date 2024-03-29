class Customer
  include Mongoid::Document

  field :name, type: String
  field :email, type: String
  field :phone, type: String
  
  belongs_to :group
  belongs_to :user

end
