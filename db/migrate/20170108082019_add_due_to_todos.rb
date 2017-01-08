class AddDueToTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :due, :date
  end
end
