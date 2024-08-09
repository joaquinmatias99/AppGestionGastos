import { useState } from 'react';

import ModalExpense from '../modal/ModalExpense';
import Dropdown from '../dropdown/Dropdown';
import './PanelButtons.css';

export const PanelButtons= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='panelButtons'>
      <button onClick={toggleModal}>Agregar</button>
      <Dropdown/>

      {isModalOpen && <ModalExpense onClose={toggleModal}  title="Agregar Gasto" idPersona={1}/>}
    </div>
  );
  
}

export default PanelButtons;
