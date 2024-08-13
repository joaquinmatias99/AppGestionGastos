import PropTypes from 'prop-types';
import "./Dropdown.css";

export const Dropdown = ({ value, onChange }) => {
  return (
    <div>
      <select className="option" value={value} onChange={(e) => onChange(e.target.value)}>
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


Dropdown.defaultProps = {
  value: '',
};

export default Dropdown;
