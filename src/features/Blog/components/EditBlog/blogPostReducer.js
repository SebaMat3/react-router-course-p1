// src/features/Blog/components/EditBlog/blogPostReducer.js


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

// Action Types
export const SET_TITLE = 'SET_TITLE';
export const SET_CONTENT = 'SET_CONTENT';
export const START_SAVING = 'START_SAVING';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_ERROR = 'SAVE_ERROR';
export const SET_AUTHOR = 'SET_AUTHOR';
export const SET_SLUG = 'SET_SLUG';

// ... other action types ...


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
        case SET_AUTHOR:
            return { ...state, author: action.payload };
        case SET_SLUG: 
            return { ...state, slug: action.payload };
        // ... other action types ...
        default:
            return state;
    }
}

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
