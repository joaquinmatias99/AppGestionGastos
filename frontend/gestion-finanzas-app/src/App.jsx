import { useState } from 'react';
import Home from "../ui/home/Home";
import Footer from "../ui/footer/Footer";
import NavBar from "../ui/navBar/NavBar";
import PieChart from "../components/pieChart/PieChart";
import Table from "../components/sectionTable/Table";
import useFetchGastos from "../hooks/useFetchGastos";
import PanelButtons from "../components/sectionTable/PanelButtons";
import ModalExpense from '../components/modal/ModalExpense';
import "./App.css";

function App() {
  const { data, loading, error } = useFetchGastos('http://localhost:8080/api/gastos');
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

  const handleDeleteClick = (idGasto) => {
    // Lógica para borrar el gasto con idGasto
    console.log('Borrar gasto con id:', idGasto);
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
          <Table data={data} onEdit={handleEditClick} onDelete={handleDeleteClick} />
        </div>
        <PieChart data={data} />
      </div>
      <Footer />
      {isModalOpen && (
         <ModalExpense
         onClose={handleCloseModal}
         title="Editar Gasto"
         gasto={selectedGasto}
         idPersona={selectedGasto ? selectedGasto.idPersona : null}
       />
      )}
    </>
  );
}

export default App;
