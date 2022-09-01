import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalEl } from 'components/Modal/modal.style';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalEl>{children}</ModalEl>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
