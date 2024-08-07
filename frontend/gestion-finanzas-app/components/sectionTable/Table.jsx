import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id Gasto</th>
            <th>Categoría</th>
            <th>Detalle</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Id Persona</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.categoria}</td>
              <td>{item.detalle}</td>
              <td>{item.monto}</td>
              <td>{item.fecha}</td>
              <td>{item.idPersona}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string.isRequired,
      monto: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      detalle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
