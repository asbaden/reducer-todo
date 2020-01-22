


export const initialState = [
    {
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        todo: 'worship reducers',
        completed: false,
        id: 3892987589
    },
    {
        todo: 'preach the good word of reducers to those who are unenlightend',
        completed: false,
        id: 3892987589
    },
    
]

export const todoReducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return [
                ...state, {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case "COMPLETE_TODO":
            return[
                state.map(item => {
                    item.completed = true
                })
            ];
        case "CLEAR_TODO":
            return [
                ...state,
                state.filter(item => item.completed === true)
            ]
            default:
                return state; 
    }
    
    return state;
}