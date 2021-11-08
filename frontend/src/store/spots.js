const LOAD_BERKELEY = 'spots/LOAD_BERKELEY';


const loadBerkeley = list => ({
    type: LOAD_BERKELEY,
    list,
});

export const getBerkeleySpots = () => async dispatch => {
    const response = await fetch('/api/berkeley');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadBerkeley(spots));
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
        default:
            return state;
    }
}

export default spotReducer;