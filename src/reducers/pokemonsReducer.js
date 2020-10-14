const initialState = {
    pokemons: [],
    error: false,
    loading: true,
    favorites: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}