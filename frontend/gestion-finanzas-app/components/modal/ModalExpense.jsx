import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './ModalExpense.css';
import Dropdown from '../dropdown/Dropdown';
import useAddGasto from '../../hooks/useAddGasto';
import useEditGasto from '../../hooks/useEditGasto';

const ModalExpense = ({ onClose, title, gasto, idPersona }) => {
  const [formGasto, setFormGasto] = useState({
    categoria: gasto?.categoria || '',
    monto: gasto?.monto || '',
    fecha: gasto?.fecha || '',
    detalle: gasto?.detalle || ''
  });


  const url = gasto ? `http://localhost:8080/api/gastos/${gasto.id}` : `http://localhost:8080/api/gastos/${idPersona}`;
  const { addGasto, loading: addLoading, error: addError, success: addSuccess } = useAddGasto(`http://localhost:8080/api/gastos/${idPersona}`);
  const { editGasto, loading: editLoading, error: editError, success: editSuccess } = useEditGasto(url);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formGasto.categoria) {
      alert("Por favor selecciona una categoría válida.");
      return;
    }

    if (gasto) {
      editGasto(formGasto);
    } else {
      addGasto(formGasto);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormGasto(prevGasto => ({ ...prevGasto, [id]: value }));
  };

  const handleDropdownChange = (value) => {
    setFormGasto(prevGasto => ({ ...prevGasto, categoria: value }));
  };

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
            <Dropdown onChange={handleDropdownChange} value={formGasto.categoria} />
          </div>
          <div className="form-group">
            <label>Detalle</label>
            <input type="text" id="detalle" value={formGasto.detalle} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Monto</label>
            <input type="number" id="monto" value={formGasto.monto} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Fecha</label>
            <input type="date" id="fecha" value={formGasto.fecha} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button" disabled={addLoading || editLoading}>
            {addLoading || editLoading ? 'Guardando...' : (gasto ? 'Actualizar' : 'Agregar')}
          </button>
          {(addError || editError) && <p>{addError || editError}</p>}
          {(addSuccess || editSuccess) && <p>Gasto {gasto ? 'actualizado' : 'agregado'} correctamente</p>}
        </form>
      </div>
    </div>
  );
};

ModalExpense.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  gasto: PropTypes.shape({
    id: PropTypes.number,
    categoria: PropTypes.string,
    monto: PropTypes.string,
    fecha: PropTypes.string,
    detalle: PropTypes.string,
  }),
  idPersona: PropTypes.number.isRequired,
};

ModalExpense.defaultProps = {
  gasto: null, 
};

export default ModalExpense;
