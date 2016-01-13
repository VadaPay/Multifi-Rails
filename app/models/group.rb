class Group
  include Mongoid::Document

  field :title, type: String
  has_many :customers
end
