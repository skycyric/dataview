import React from 'react';
import PropTypes from 'prop-types';

const PopUpAlert = ({ title, content, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

PopUpAlert.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PopUpAlert;
