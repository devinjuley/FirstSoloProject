import { csrfFetch } from './csrf';

const LOAD_BERKELEY = 'spots/LOAD_BERKELEY';
const LOAD_OAKLAND = 'spots/LOAD_OAKLAND';
const LOAD_SAN_FRANCISCO = 'spots/LOAD_SAN_FRANCISCO';
const LOAD_SAN_JOSE = 'spots/LOAD_SAN_JOSE';
const LOAD_SINGLE_SPOT = 'spots/LOAD_SINGLE_SPOT';
const ADD_NEW_LISTING = 'spots/ADD_NEW_LISTING';
const DELETE_LISTING = 'spots/DELETE_LISTING';
const ADD_NEW_REVIEW = 'spots/ADD_NEW_REVIEW'
const DELETE_REVIEW = 'spots/DELETE_REVIEW'
const LOAD_ALL = 'spots/LOAD_ALL'
const SEARCH = '/spots/SEARCH'

const loadAll = list => ({
    type: LOAD_ALL,
    list
})

const search = list => ({
    type: SEARCH,
    list
})

const loadBerkeley = list => ({
    type: LOAD_BERKELEY,
    list,
});

const loadOakland = list => ({
    type: LOAD_OAKLAND,
    list,
})

const loadSanFrancisco = list => ({
    type: LOAD_SAN_FRANCISCO,
    list,
})

const loadSanJose = list => ({
    type: LOAD_SAN_JOSE,
    list,
})

const loadSingleSpot = (list) => ({
    type: LOAD_SINGLE_SPOT,
    list
})

const addNewListing = list => ({
    type: ADD_NEW_LISTING,
    list
})

const addNewReview = list => ({
    type: ADD_NEW_REVIEW,
    list
})

const deleteOneReview = list => ({
    type: DELETE_REVIEW,
    list
})

const deleteOneListing = list => ({
    type: DELETE_LISTING,
    list
});

export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/allspots');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadAll(spots));
    }
}

export const getSearch = (searchTerm) => async dispatch => {
    const response = await csrfFetch(`/api/allspots/${searchTerm}`);

    if (response.ok) {
        const searchTerm = await response.json();
        dispatch(search(searchTerm));
        return searchTerm;
    }
}

export const getBerkeleySpots = () => async dispatch => {
    const response = await fetch('/api/berkeley');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadBerkeley(spots));
    }
}

export const getOaklandSpots = () => async dispatch => {
    const response = await fetch('/api/oakland');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadOakland(spots));
    }
}

export const getSanFranciscoSpots = () => async dispatch => {
    const response = await fetch('/api/sanfrancisco');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadSanFrancisco(spots));
    }
}

export const getSanJoseSpots = () => async dispatch => {
    const response = await fetch('/api/sanjose');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadSanJose(spots));
    }
}

export const getSingleSpot = (spotId) => async dispatch => {
    const response = await fetch(`/api/spot/${spotId}`);

    if (response.ok) {
        const spot = await response.json();
        dispatch(loadSingleSpot(spot));
    }
}

export const createNewSpot = (newListing) => async dispatch => {
    const response = await csrfFetch('/api/createlisting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newListing)
    });

    if (response.ok) {
        const newListing = await response.json();
        dispatch(addNewListing(newListing));
        return newListing;
    }
}

export const createNewReview = (newReview) => async dispatch => {
    const response = await csrfFetch(`/api/createreview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addNewReview(review));
        return review;
    }
}

export const getEditListing = (spotId) => async dispatch => {
    const response = await fetch(`/api/editlisting/${spotId}`)
    if (response.ok) {
        const listing = await response.json()
        dispatch(loadSingleSpot(listing))
        return listing;
    }
}

export const editListing = (listing) => async dispatch => {
    const response = await csrfFetch(`/api/editlisting/${listing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listing)
    })
    if (response.ok) {
        const listing = await response.json()
        dispatch(addNewListing(listing))
        return listing;
    }
}

export const deleteListing = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/deletelisting/${spotId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const listing = await response.json()
        dispatch(deleteOneListing(listing))
        return listing;
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/deletereview/${reviewId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(deleteOneReview(review))
        return review
    }
}

const initialState = {
    spots: false,
};

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BERKELEY: {
            const newState = { ...state }
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;

        }
        case LOAD_OAKLAND: {
            const newState = { ...state }
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;
        }

        case LOAD_SAN_FRANCISCO: {
            const newState = { ...state }
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;
        }

        case LOAD_SAN_JOSE: {
            const newState = { ...state }
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;
        }
        case LOAD_SINGLE_SPOT: {
            const newState = { ...state }
            newState[action.list.id] = action.list;
            newState.spots = true;
            return newState;
        }
        case ADD_NEW_LISTING: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            }
            return newState;
        }
        case DELETE_LISTING: {
            const newState = { ...state };
            delete newState[action.list];
            return newState;
        }
        case ADD_NEW_REVIEW: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            }
            return newState;
        }
        case LOAD_ALL: {
            const newState = { ...state }
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;
        }
        case SEARCH: {
            const newState = {}
            action.list.forEach(spot => {
                newState[spot.id] = spot;
            })
            newState.spots = true;
            return newState;
        }
        default:
            return state;
    }
}

export default spotReducer;