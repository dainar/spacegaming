const initialState = {
    cupones:[]
};

export function Reducer(state = initialState, action){
    switch (action.type){
        case "SET_CUPONES":
            return {...state,
                "cupones": action.cupones
            }
        default:
            return state;
    }
}
