const LOAD_BERKELEY = 'spots/LOAD_BERKELEY';
const LOAD_OAKLAND = 'spots/LOAD_OAKLAND';
const LOAD_SAN_FRANCISCO = 'spots/LOAD_SAN_FRANCISCO'
const LOAD_SAN_JOSE = 'spots/LOAD_SAN_JOSE'


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

        default:
            return state;
    }
}

export default spotReducer;