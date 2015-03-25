class UsersController < ApplicationController
    
    before_action :set_user, only: [:show, :destroy, :update]
    
    def index
        @users = User.all
        respond_to do |format|
            format.json { render :json => @users }
        end
    end
    
    def create
        @user = User.new(user_params)
        respond_to do |format|
            if @user.save
                format.json { render :json => { success: true, errors: nil, user: @user } }
            else
                format.json { render :json => { success: false, errors: @user.errors, user: nil } } 
            end
        end
    end
    
    def show
        respond_to do |format|
            format.json { render :json => @user }
        end
    end
                       
    def update
        respond_to do |format|
            if @user.update_attributes(user_params)
                format.json { render :json => { success: true, errors: nil, user: @user } }
            else
                format.json { render :json => { success: false, errors: @user.errors } }
            end
        end
    end
    
    def destroy
        respond_to do |format|
            if @user.destroy
                format.json { render :json => { success: true } }
            else
                format.json { render :json => { success: false } }
            end
        end
    end
    
    private
    
    def set_user
        @user = User.find(params[:id])
    end
    
    def user_params
        params.require(:user).permit(:username, :name, :lastname, :age, :address, :email, :phone_number)
    end
    
end