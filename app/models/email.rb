class SentEmail
  include Mongoid::Document

  field :to_email, type: String
  field :from_email, type: String
  field :body, type: String
  field :subject, type: String

  belongs_to :user
end
