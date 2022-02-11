import { combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return state + 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter
});

const counter1 =(state=0, action )=>{
	switch (action.type ){
		case "RESET_COUNTER":
		   return state;
		   default:
		   return state;
		   	}
};
const rootReducer1= combineReducers({
	counter1
})



export default rootReducer;
