//import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

// Agregando el soporte para firebase

import { Reducer } from './reducer';


//import { mkplace } from './mkplace/reducer';

const Reducers = combineReducers({
	"cup": Reducer,
	
});

export default Reducers;
