import { combineReducers } from 'redux';
import { IAppState } from './app.state';
import { usersReducer } from './users/users.reducer';


  // tuk trqbva da e reducer<IAppState> no kato go сложа ми дадва че двата аргумента си пречат и не се привемат
export const reducer = combineReducers<IAppState>({
  users: usersReducer
});
