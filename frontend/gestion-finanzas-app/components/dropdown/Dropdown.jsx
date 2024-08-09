import "./Dropdown.css";

export const Dropdown = () => {
    return (
        <div>
            <select className="option">
                <option value="">Seleccione una categoría</option>
                <option value="supermercado">Supermercado</option>
                <option value="comida">Comida</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="viaje">Viaje</option>
                <option value="juegos">Juegos</option>
                <option value="otros">Otros</option>
            </select>
        </div>
    )
}

export default Dropdown;
