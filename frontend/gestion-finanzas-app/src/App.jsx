import { useState } from 'react';

import Home from "../ui/home/Home";
import Footer from "../ui/footer/Footer";
import NavBar from "../ui/navBar/NavBar";
import PieChart from "../components/pieChart/PieChart";
import Table from "../components/sectionTable/Table";
import PanelButtons from "../components/sectionTable/PanelButtons";
import ModalExpense from '../components/modal/ModalExpense';

import useFetchGastos from "../hooks/useFetchGastos";
import useDeleteGasto from '../hooks/useDeleteGasto';
import "./App.css";

function App() {  
  const { data, loading, error, setData } = useFetchGastos('http://localhost:8080/api/gastos');
  const { deleteGasto, loading: deleteLoading, success: deleteSuccess, error: deleteError } = useDeleteGasto('http://localhost:8080/api/gastos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGasto, setSelectedGasto] = useState(null);

  const handleEditClick = (gasto) => {
    setSelectedGasto(gasto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGasto(null);
  };
 const handleDeleteClick = async (idGasto) => {
  try {
    await deleteGasto(idGasto);
    if (deleteSuccess) {
      setData(prevData => prevData.filter(gasto => gasto.id !== idGasto));
    }
  } catch (error) {
    console.error("Error al eliminar el gasto:", error);
  }
};



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <div className="container">
        <Home />
        <div className="section">
          <PanelButtons />
          <Table 
           data={data}
           onEdit={handleEditClick}
           onDelete={handleDeleteClick} 
           isDeleteLoading={deleteLoading} 
           />
        </div>
        <PieChart data={data} />
      </div>
      <Footer />
     {isModalOpen && selectedGasto && (
         <ModalExpense
           onClose={handleCloseModal}
           title="Editar Gasto"
           gasto={selectedGasto}
           idPersona={selectedGasto.idPersona}
         />
      )}
       {deleteError && <p>Error al eliminar el gasto: {deleteError}</p>} {}
    </>
  );
}

export default App;
