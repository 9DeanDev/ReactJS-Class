const initState = {
    users: [
        { id: 1, name: 'Dean' },
        { id: 2, name: 'Lyn' },
        { id: 3, name: 'Nho' },
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>run into', action)
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

}
export default rootReducer;