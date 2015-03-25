class HomeController < ApplicationController
    
    def index
        #render 'shared/_leave_approval_form', layout: false
        render :text => "", :layout => true
    end
    
end