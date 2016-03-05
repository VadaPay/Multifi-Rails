namespace :routine_task do
	desc 'send offers email'
	task send_offers_email: :environment do
	  	# ... set options if any
	  	Offer.distinct(:user_id).each do |user_id|
	      user = User.find(user_id)
	      offers = user.offers
	      UserMailer.send_offers_to_user_email(user,offers).deliver_now
    	end
	end
end