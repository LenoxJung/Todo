class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def new
    @todo = Todo.new
    render json: @todo
  end

  def create
    @todo = Todo.new(title:params[:title])
    @todo.save
    render json: @todo
  end


  def edit
  end
end
