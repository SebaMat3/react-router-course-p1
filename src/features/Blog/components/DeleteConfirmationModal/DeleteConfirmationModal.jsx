// src/features/Blog/components/DeleteConfirmationModal/DeleteConfirmationModal.jsx
import PropTypes from 'prop-types';
import './DeleteConfirmationModal.css';

function DeleteConfirmationModal({ isOpen, onConfirm, onCancel, blogPostTitle }) {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete the blog post: {blogPostTitle}?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  blogPostTitle: PropTypes.string.isRequired,
};

export default DeleteConfirmationModal;
