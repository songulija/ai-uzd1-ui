import netAPi from "../netAPI";

export const getPlayers = () => async(dispatch,getState) => {
    try{
        dispatch({
            type: 'PLAYERS_FETCH_REQUEST'
        })
        const response = await netAPi.get('/api/Players')
        console.log(JSON.stringify(response))
        dispatch({
            type: 'PLAYERS_FETCH_SUCCESS',
            payload: response.data
        })
        
    }catch (error) {
        if (error === undefined) {
            dispatch({
                type: 'ERROR',
                payload: 'Oopsie. System error. Try again later.'
            })
        } else {
            dispatch({
                type: 'ERROR',
                payload: error.response.data
            })
        }
    }
}

export const addPlayer = (postObj) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'PLAYERS_CREATE_REQUEST'
        })
        const response = await netAPi.post('/api/Players',postObj)
        dispatch({
            type: 'PLAYERS_CREATE_SUCCESS',
            payload: response.data
        })
    }catch (error) {
        if (error === undefined) {
            dispatch({
                type: 'ERROR',
                payload: 'Oopsie. System error. Try again later.'
            })
        } else {
            dispatch({
                type: 'ERROR',
                payload: error.response.data
            })
        }
    }
}