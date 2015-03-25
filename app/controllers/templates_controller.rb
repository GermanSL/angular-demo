class TemplatesController < ApplicationController
    
    def welcome
        render 'shared/_welcome_template', layout: false
    end
    
    def user_list
        render 'shared/_user_list_template', layout: false
    end
    
    def user_details
        render 'shared/_user_details_template', layout: false
    end
    
    def user_form
        render 'shared/_user_form_template', layout: false
    end
    
end