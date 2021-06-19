import { createSlice } from '@reduxjs/toolkit';

const topicSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: { }
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon, quizIds } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            
            const {quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId)

        }
    }
})

export const addTopic = (topic) => {
    return {
        type:'topics/addTopic',
        payload: topic
    }
} 

export const addQuizId = (quiz) => {
    return {
        type:'topics/addQuizId',
        payload: quiz
    }
}

export const selectTopics = (state) => state.topics.topics;

export default topicSlice.reducer;