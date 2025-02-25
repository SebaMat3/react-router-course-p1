//import React from 'react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { setTitle, setContent, startSaving, saveError, saveSuccess } from './blogPostReducer';

function EditBlogUI({ state, dispatch, onSave, onCancel }) {
    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
    };

    const handleContentChange = (value) => {
        const sanitizedValue = DOMPurify.sanitize(value); // Sanitize here
        dispatch(setContent(sanitizedValue));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(startSaving()); // Use startSaving action creator

        try {
            console.log('EditBlogUI - handleSubmit - state before onSave:', state); // ADD THIS LINE
            await onSave({ // Pass necessary data to onSave
                title: state.title,
                content: state.content,
                slug: state.slug, // Make sure slug is included here
                author: state.author, // And author if needed for update

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
                <ReactQuill 
                value={state.content} 
                onChange={handleContentChange} 
                modules={{ 
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }], // Enable headings
                        ['bold', 'italic', 'underline'],     // Enable bold, italic, underline
                        // ... other toolbar options ...
                    ],
                }} 
                formats={[
                    'header',
                    'bold', 'italic', 'underline',
                    // ... other formats ...
                ]} 

            />

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

EditBlogUI.propTypes = {
    state: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        isSaving: PropTypes.bool.isRequired,
        saveError: PropTypes.object,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditBlogUI;