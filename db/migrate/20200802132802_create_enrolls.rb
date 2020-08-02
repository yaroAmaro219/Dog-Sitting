class CreateEnrolls < ActiveRecord::Migration[6.0]
  def change
    create_table :enrolls do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :email
      t.string :dogname
      t.string :dogage
      t.string :dogbreed
      t.string :dogweight
      t.string :startdate
      t.string :enddate
      t.string :questions
      t.string :consent
      t.string :needs
      t.string :vaccine
      t.string :pickup

      t.timestamps
    end
  end
end
