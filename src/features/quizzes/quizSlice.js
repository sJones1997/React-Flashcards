import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addQuizId } from "../topics/topicSlice";

const quizSlice = createSlice({

    name: 'quizzes',
    initialState: {
        quizzes: { }
    },
    reducers: {

        addQuiz: ( state, action ) => {

            const {id, name, topicId, cardIds } = action.payload

            state.quizzes[id] = {

                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds

            }
        }

    }

})

export const addQuiz = (quiz) => {
    return {
        type: 'quizzes/addQuiz',
        payload: quiz
    }
}

export const thunkAddQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload))
        dispatch(addQuizId(payload))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizSlice.reducer;

