import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ data, onEdit, onDelete }) => {
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
            <th> </th>
            <th> </th>
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
              <td>
                <button onClick={() => onEdit(item)}>Editar</button>
              </td>
              <td>
                <button onClick={() => onDelete(item.id)}>Borrar</button>
              </td>
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
      id: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
      monto: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      detalle: PropTypes.string.isRequired,
      idPersona: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
