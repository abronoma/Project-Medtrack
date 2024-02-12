import { ADD_DRUGS, FETCH_DRUGS } from "./action/pharmActions";

export const addDrugs = (drug) => async (dispatch, getState) => {
    try {
        const data = await fetch('http://localhost:7000/api/getDrugs', {
            method: 'POST',
            body: JSON.stringify(drug),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const newDrug = await data.json()
        dispatch({type: ADD_DRUGS, payload: newDrug})
    } catch (error) {
        console.log('Could not add drug:', error)
    }
}

export const fetchDrugs = () => async (dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:7000/api/getDrugs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        dispatch({ type: FETCH_DRUGS, payload: data })
    } catch (error) {
        console.log('Could not fetch drugs:', error)
    }
}


