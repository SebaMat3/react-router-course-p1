    // src/routes/CreateBlog/CreateBlog.jsx
    import React, { useReducer } from 'react';
    import { useNavigate } from 'react-router-dom';
    import EditBlogUI from '../../features/Blog/components/EditBlog/EditBlogUI'; // Reuse EditBlogUI
    import { blogPostReducer, SET_TITLE, SET_CONTENT, SET_AUTHOR, SET_SLUG } from '../../features/Blog/components/EditBlog/blogPostReducer';
    import { generateSlug } from '../../utils/generateSlug'; // You'll need a slug generation function
    import { blogdata } from '../../Data/blogdata'; // Import blogdata

    const initialState = {
        title: '',
        content: '',
        author: '', // Or pre-populate with the logged-in user's name
        slug: '',
        isSaving: false,
        saveError: null,
    };

    function CreateBlog() {
        const [state, dispatch] = useReducer(blogPostReducer, initialState);
        const navigate = useNavigate();

        const handleSave = (newBlogPost) => {
            // In a real app, you'd send this to your API
            newBlogPost.slug = generateSlug(newBlogPost.title); // Generate the slug
            blogdata.push(newBlogPost); // Add to the in-memory blogdata (temporary)
            navigate(`/blog/${newBlogPost.slug}`); // Navigate to the new post
        };

        const handleCancel = () => {
            navigate('/blog'); // Go back to the blog page
        };

        return (
            <>
                <h2>Create New Blog Post</h2 >
                <EditBlogUI
                    state={state}
                    dispatch={dispatch}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </>
        );
    }

    export {CreateBlog};