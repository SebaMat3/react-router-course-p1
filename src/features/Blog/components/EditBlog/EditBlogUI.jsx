//import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setTitle, setContent, startSaving, saveError, saveSuccess } from './blogPostReducer';

function EditBlogUI({ state, dispatch, onSave, onCancel }) {
    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
    };

    const handleContentChange = (value) => {
        dispatch(setContent(value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(startSaving()); // Use startSaving action creator

        try {
            await onSave({ // Pass necessary data to onSave
                title: state.title,
                content: state.content,
                // ... other data from state ...
            });
            dispatch(saveSuccess()); // Use saveSuccess action creator on success
        } catch (error) {
            dispatch(saveError(error)); // Use saveError action creator on error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Blog Post</h2>

            <label htmlFor="edit-blog-title">Title:</label>
            <input type="text" id="edit-blog-title" name="title" value={state.title} onChange={handleTitleChange} />

            <label>Content:</label>
            <ReactQuill value={state.content} onChange={handleContentChange} modules={{ /* ... */ }} formats={[/* ... */]} />

            {/* ... other input fields bound to state and dispatch ... */}

            {state.saveError && <p className="error">Error saving: {state.saveError.message}</p>}
            {state.isSaving && <p>Saving...</p>}

            <div>
                <button type="submit" disabled={state.isSaving}>Save Changes</button>
                <button type="button" onClick={onCancel} disabled={state.isSaving}>Cancel</button>
            </div>
        </form>
    );
}

export default EditBlogUI;