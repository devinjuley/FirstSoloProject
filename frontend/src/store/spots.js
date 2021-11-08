const LOAD = 'spots/LOAD';


const load = list => ({
    type: LOAD,
    list,
});

export const getBerkeleySpots = () => async dispatch => {
    const response = await fetch('/api/berkeley');

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
}

const initialState = {
    list: [],
    types: []
};

const spotReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
            }

        }
    }
}