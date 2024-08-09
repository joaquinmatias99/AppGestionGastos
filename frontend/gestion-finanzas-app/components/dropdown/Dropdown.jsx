import PropTypes from 'prop-types';
import "./Dropdown.css";

export const Dropdown = ({ onChange }) => {
  return (
    <div>
      <select className="option" onChange={(e) => onChange(e.target.value)}>
        <option value="">Seleccione una categoría</option>
        <option value="SUPERMERCADO">Supermercado</option>
        <option value="COMIDA">Comida</option>
        <option value="ENTRETENIMIENTO">Entretenimiento</option>
        <option value="VIAJE">Viaje</option>
        <option value="JUEGOS">Juegos</option>
        <option value="OTROS">Otros</option>
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
