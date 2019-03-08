class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :title
      t.boolean :completed 
      t.timestamps
    end
  end
end
