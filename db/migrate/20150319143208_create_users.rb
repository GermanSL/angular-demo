class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
        t.string :username
        t.string :name
        t.string :lastname
        t.integer :age
        t.string :email
        t.string :address
        t.string :phone_number
    end
  end
end
