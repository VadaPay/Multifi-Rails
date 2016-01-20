class CustomersController < ApplicationController


    before_filter :authenticate_user!, only: [:create]

    def index
      respond_with Customer.all
    end

    def show
      respond_with Customer.find(params[:id])
    end

    def create
      respond_with Customer.create(post_params.merge(user_id: current_user.id))
    end

    private
    def post_params
      params.require(:customer).permit(:name, :email, :phone)
    end
end
