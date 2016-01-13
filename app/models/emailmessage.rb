class Emailmessage
  include Mongoid::Document

  field :subject, type: String
  field :body, type: String

  belongs_to :user
end
