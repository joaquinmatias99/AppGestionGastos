import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.categoria}</td>
              <td>{item.monto}</td>
              <td>{item.fecha}</td>
              <td>{item.detalle}</td>
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
