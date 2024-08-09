import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './ModalExpense.css';
import Dropdown from '../dropdown/Dropdown';
import useAddGasto from '../../hooks/useAddGasto';

const ModalExpense = ({ onClose, title, idPersona }) => {
  const [gasto, setGasto] = useState({
    categoria: '',
    monto: '',
    fecha: '',
    detalle: ''
  });

  const url = `http://localhost:8080/api/gastos/${idPersona}`;
  const { addGasto, loading, error, success } = useAddGasto(url);

//Actualiza el valor del campo en el momento que se cambie
  const handleChange = (e) => {
    const { id, value } = e.target;
    setGasto(prevGasto => ({ ...prevGasto, [id]: value }));
  };

//Actualiza el valor del desplegable al momento de seleccionar otro
  const handleDropdownChange = (value) => {
    setGasto(prevGasto => ({ ...prevGasto, categoria: value }));
  };
//Chequea el desplegable categoria
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gasto.categoria) {
      alert("Por favor selecciona una categoría válida.");
      return;
    }
    addGasto(gasto);
  };

//Chequear click del modal

  const handleClickOutside = (event) => {
    if (!modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  
  const modalRef = useRef(null);

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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Categoria</label>
            <Dropdown onChange={handleDropdownChange} />
          </div>
          <div className="form-group">
            <label>Detalle</label>
            <input type="text" id="detalle" value={gasto.detalle} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Monto</label>
            <input type="number" id="monto" value={gasto.monto} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Fecha</label>
            <input type="date" id="fecha" value={gasto.fecha} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Agregando...' : 'Agregar'}
          </button>
          {error && <p>{error}</p>}
          {success && <p>Gasto agregado correctamente</p>}
        </form>
      </div>
    </div>
  );
};

ModalExpense.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  idPersona: PropTypes.number.isRequired,
};

export default ModalExpense;
