

const initalstate =  {
    list : []
}

const TodoReducer = (state = initalstate , action)=>{
    switch(action.type){
        case "ADD" : {
            return {list : [...state.list , action.payload]};
        }
        case "Remove" : {
            return {list : state.list.filter((item)=>item!=action.payload)}
        }
         default : {
            return state
        }
    }
}

export default  TodoReducer