EmberCrud::Application.routes.draw do
  resources :persons
  root :to => 'homepage#index'
end
