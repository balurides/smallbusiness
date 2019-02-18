const initialState = {
    age:40
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'AGE_UP':
            newState.age += action.value;
            break;

        case 'AGE_DOWN':
             newState.age -= action.value;
            break;
        default: 
            return state;
    }
};

export default reducer;