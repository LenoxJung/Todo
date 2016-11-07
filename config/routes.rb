Rails.application.routes.draw do

  resources :todos
  root 'todos#home'
end
