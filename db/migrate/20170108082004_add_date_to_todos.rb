class AddDateToTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :date, :date
  end
end
