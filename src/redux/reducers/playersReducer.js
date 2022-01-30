export const playersReducer = (state = {players: []}, action)=>{
    switch(action.type){
        case 'PLAYERS_FETCH_REQUEST':
            return {...state, loading: true}
        case 'PLAYERS_FETCH_SUCCESS':
            return {...state, loading: false, players: action.payload}
        case 'PLAYERS_CREATE_REQUEST':
            return {...state, loading: true}
        case 'PLAYERS_CREATE_SUCCESS':
            const new_players = [...state.players, {...action.payload}]
            return {...state, loading: false, players: new_players}
        case 'ERROR':
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}