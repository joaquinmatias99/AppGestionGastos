import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ModalExpense.css';
import Dropdown from '../dropdown/Dropdown';

const ModalExpense = ({ onClose, title }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <button className="close-modal-button" onClick={onClose}>×</button>
        <h2>{title}</h2>

        <form>
          <div className="form-group">
            <label>Categoria</label>
            <Dropdown />
          </div>
          <div className="form-group">
            <label>Detalle</label>
            <input type="text" id="detail" />
          </div>
          <div className="form-group">
            <label>Monto</label>
            <input type="number" id="amount" />
          </div>
          <div className="form-group">
            <label>Fecha</label>
            <input type="date" id="date" />
          </div>
          <button type="submit" className="submit-button">Agregar</button>
        </form>


      </div>
    </div>
  );
};

ModalExpense.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalExpense;
