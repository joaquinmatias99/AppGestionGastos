import Home from "../ui/home/Home"
import Footer from "../ui/footer/Footer"
import NavBar from "../ui/navBar/NavBar"
import PieChart from "../components/pieChart/PieChart"
import Table from "../components/table/Table"

const sampleData = [
  { categoria: 'Alimentos', monto: '300', fecha: '2024-08-05', detalle: 'Compra en supermercado' },
  { categoria: 'Transporte', monto: '200', fecha: '2024-08-04', detalle: 'Gasolina' },
  { categoria: 'Entretenimiento', monto: '150', fecha: '2024-08-03', detalle: 'Entrada al cine' },
  { categoria: 'Salud', monto: '100', fecha: '2024-08-02', detalle: 'Consulta médica' },
  { categoria: 'Otros', monto: '50', fecha: '2024-08-01', detalle: 'Varios' },
];


function App() {


  return (
    <>
      <NavBar />
      <Home />
      <Table data={sampleData} />
      <PieChart/>
      <Footer />

    </>
  )
}

export default App
