class UserMailer < ApplicationMailer
	def send_offers_to_user_email(user,offers)
	    @user = user
	    @offers = offers
	    mail(:to => @user.email, :subject => "Offers")
  	end
end