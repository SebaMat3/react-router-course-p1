import { useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import EditBlogUI from './EditBlogUI'; 
import { blogPostReducer } from './blogPostReducer'; 
import { blogdata } from '../../../../Data/blogdata'; 
// import { useBlogApi } from '../../hooks/useBlogApi'; // Example API hook (if you create one)


function EditBlog({ blogPost, onSaveSuccess, onCancel }) {
    const initialPost = blogdata.find(post => post.slug === blogPost.slug);

    const initialState = {
        title: initialPost?.title || '',
        content: initialPost?.content || '',
        author: initialPost?.author || '',
        slug: initialPost?.slug || '',
        isSaving: false,
        saveError: null,
        isDraft: initialPost?.isDraft !== undefined ? initialPost.isDraft : true,
    };

    const [state, dispatch] = useReducer(blogPostReducer, initialState);
    // const blogApi = useBlogApi(); // Example API hook

    const handleSave = useCallback(async (updatedBlogPost) => {
        dispatch({ type: 'START_SAVING' });
        try {
            // await blogApi.updateBlogPost(blogPostId, updatedBlogPost); // Example API call
            // Simulate API success for now
            await new Promise(resolve => setTimeout(resolve, 1000));
            dispatch({ type: 'SAVE_SUCCESS' });
            console.log('EditBlog - handleSave - updatedBlogPost before onSaveSuccess:', updatedBlogPost); // ADD THIS LINE

            onSaveSuccess(updatedBlogPost); // Callback to parent on success
            
        } catch (error) {
            dispatch({ type: 'SAVE_ERROR', payload: error });
        }
    }, [onSaveSuccess /*, blogApi */]);

    const handleCancel = useCallback(() => {
        onCancel(); // Callback to parent on cancel
    }, [onCancel]);

    EditBlog.propTypes = {
        blogPost: PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.string,
            isDraft: PropTypes.bool,
        }).isRequired,
        onSaveSuccess: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };
    
    return (
        <EditBlogUI
            state={state}
            dispatch={dispatch}
            onSave={handleSave}
            onCancel={handleCancel}
        />
    );
}

export default EditBlog;