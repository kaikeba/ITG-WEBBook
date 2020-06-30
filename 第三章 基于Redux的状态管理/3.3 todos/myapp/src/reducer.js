function reducer(state=[],action){
    switch(action.type){
        case "TODO_ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    done: false
                }
            ]
        case "TODO_DONE":
            state.forEach(item=>{
                if(item.id === action.id){
                    item.done = action.done 
                }
            })  
            return [...state];
        case "TODO_EDIT":
            state.forEach(item=>{
                if(item.id === action.id){
                    item.title = action.title; 
                }
            })  
            return [...state];
        case "TODO_REMOVE":
            state=state.filter(item=>item.id!==action.id);  
            return state;
        case "TODO_REMOVE_DONE":
            state=state.filter(item=>(!item.done));
            return state;
    }
    return state;
}
export default reducer;