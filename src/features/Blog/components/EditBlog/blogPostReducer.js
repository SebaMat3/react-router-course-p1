// src/features/Blog/components/EditBlog/blogPostReducer.js

// Action Types
export const SET_TITLE = 'SET_TITLE';
export const SET_CONTENT = 'SET_CONTENT';
export const START_SAVING = 'START_SAVING';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_ERROR = 'SAVE_ERROR';
// ... other action types ...

export const initialState = {
    title: '',
    content: '',
    author: '',
    slug: '',
    tags: [],
    featuredImage: null,
    isSaving: false,
    saveError: null,
    isDraft: true,
    // ... more initial state properties ...
};

export function blogPostReducer(state, action) {
    switch (action.type) {
        case SET_TITLE:
            return { ...state, title: action.payload };
        case SET_CONTENT:
            return { ...state, content: action.payload };
        case START_SAVING:
            return { ...state, isSaving: true, saveError: null };
        case SAVE_SUCCESS:
            return { ...state, isSaving: false, saveError: null };
        case SAVE_ERROR:
            return { ...state, isSaving: false, saveError: action.payload };
        // ... other action types ...
        default:
            return state;
    }
}


// Action Creators
export const setTitle = (payload) => ({
    type: SET_TITLE,
    payload,
});

export const setContent = (payload) => ({
    type: SET_CONTENT,
    payload,
});

export const startSaving = () => ({
    type: START_SAVING,
});

export const saveSuccess = () => ({
    type: SAVE_SUCCESS,
});

export const saveError = (payload) => ({
    type: SAVE_ERROR,
    payload,
});
// ... other action creators ...