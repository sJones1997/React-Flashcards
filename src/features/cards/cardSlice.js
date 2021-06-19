const { createSlice } = require("@reduxjs/toolkit");


const cardSlice = createSlice({
    name: 'cards',
    initialState: {cards: {}},
    reducers: {
        addCard: ( state, action ) => {
            const {id, front, back} = action.payload;

            state.cards[id] = { 
                front: front,
                back:back
            }
        }
    }
});

export const addCard = (card) => {
    return {
        type: 'cards/addCard',
        payload: card
    }
}

export const selectCards = (state) => state.cards.cards

export default cardSlice.reducer;