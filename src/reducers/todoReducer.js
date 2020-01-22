


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
     case 'COMPLETE_TODO':
         const completedState = state.map(item => {
            if(item.id === action.payload.id){
                item.completed = !item.completed;
            }
            return item;
          })
          return completedState;
          case 'CLEAR_TODO':
            const clearedState =  state.filter(item => item.completed === true)
              return clearedState;
          default:
            return state;
    }
    
    
}