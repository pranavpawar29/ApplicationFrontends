const redux = require('redux');

//reducer function will return a object always
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === "increment"){
        return {
            counter: state.counter + 1
        };
    }
    if(action.type === "decrement"){
        return {
            counter: state.counter - 1
        };
    }
    return state;    
};

//create store
const store = redux.createStore(counterReducer);

//subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber);

//dispatch action
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})