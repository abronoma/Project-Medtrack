import { ADD_DRUGS, DELETE_DRUGS, FETCH_DRUGS, UPDATE_DRUGS } from "./action/pharmActions";

export const addDrugs = (drug) => async (dispatch, getState) => {
    try {
        const data = await fetch('http://localhost:7000/api/addDrug', {
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


export const updateDrug = (id) => async(dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/updateDrug/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const updatedDrug = await data.json()
        dispatch({type: UPDATE_DRUGS, payload: updatedDrug})
    } catch (error) {
        console.log(error)
    }
}

export const deleteDrug = (id) => async(dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/deleteDrug/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const deletedDrug = await data.json()
        dispatch({type: DELETE_DRUGS, payload: deletedDrug})
    } catch (error) {
        console.log(error)
    }
}