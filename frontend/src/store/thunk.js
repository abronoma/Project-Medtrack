import { ADD_LABS, DELETE_LABS, FETCH_LAB, FETCH_LABS, UPDATE_LABS } from "./action/labActions";
import { ADD_DRUGS, DELETE_DRUGS, FETCH_DRUG, FETCH_DRUGS, UPDATE_DRUGS } from "./action/pharmActions";


// pharmacy thunk
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
        dispatch({ type: ADD_DRUGS, payload: newDrug })
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

export const fetchDrug = () => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/getDrug/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const response = await data.json()
        dispatch({ type: FETCH_DRUG, payload: response })
    } catch (error) {
        console.log("Could not fetch drug:", error);
    }
}

// fetch data for piechart 
export const fetchPrice =  () => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/getPrice/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const response = await data.json()
        dispatch({ type: FETCH_DRUG, payload: response })
    } catch (error) {
        console.log("Could not fetch drug:", error);
    }
}


export const updateDrug =  (drug) => async(dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/updateDrug/${drug._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(drug)
        })
        const updatedDrug = await data.json()
        dispatch({ type: UPDATE_DRUGS, payload: updatedDrug })
    } catch (error) {
        console.log(error)
    }
}


export const deleteDrug = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/deleteDrug/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const deletedDrug = await data.json()
        dispatch({ type: DELETE_DRUGS, payload: deletedDrug })
    } catch (error) {
        console.log(error)
    }
}

// lab thunk
export const fetchLabs = () => async (dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:7000/api/getLabs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        dispatch({ type: FETCH_LABS, payload: data })
    } catch (error) {
        console.log('Could not fetch labs:', error)
    }
}

export const fetchLab = (lab) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/getLab/${lab._id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(lab)
        })
        const response = await data.json()
        dispatch({ type: FETCH_LAB, payload: response })
    } catch (error) {
        console.log("Could not fetch lab:", error);
    }
}


export const addLabs = (lab) => async (dispatch, getState) => {
    try {
        const data = await fetch('http://localhost:7000/api/addLab', {
            method: 'POST',
            body: JSON.stringify(lab),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const newLab = await data.json()
        dispatch({ type: ADD_LABS, payload: newLab })
    } catch (error) {
        console.log('Could not add lab:', error)
    }
}


export const updateLab = (lab) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/updateLab/${lab._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(lab)
        })
        const updatedLab = await data.json()
        dispatch({ type: UPDATE_LABS, payload: updatedLab })
    } catch (error) {
        console.log(error)
    }
}

export const deleteLab = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://localhost:7000/api/deleteLab/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const deletedLab = await data.json()
        dispatch({ type: DELETE_LABS, payload: deletedLab })
    } catch (error) {
        console.log(error)
    }
}