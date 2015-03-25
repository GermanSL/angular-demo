# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


(1..10).each do |i|

    User.create(
             username: "user_#{i}", 
             name: 'User', 
             lastname: 'Ln', 
             age: 25, 
             email: "user#{i}.Ln@gmail.com", 
             address: '1000 Street Name, City ST 10001',
             phone_number: '101-202-3040'
            )

end