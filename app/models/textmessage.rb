class Textmessage
  include Mongoid::Document

  field :to, type: String
  field :body, type: String

  belongs_to :user
end
