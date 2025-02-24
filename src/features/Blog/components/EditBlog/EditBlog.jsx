import { useReducer, useCallback } from 'react';
import EditBlogUI from './EditBlogUI'; // Import UI component
import { blogPostReducer } from './blogPostReducer'; // Import reducer
import { blogdata } from '../../../../Data/blogdata'; // Import blogdata to fetch the post
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


    // Example: useCallback for memoizing save handler
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