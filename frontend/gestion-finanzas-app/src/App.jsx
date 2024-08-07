import Home from "../ui/home/Home"
import Footer from "../ui/footer/Footer"
import NavBar from "../ui/navBar/NavBar"
import PieChart from "../components/pieChart/PieChart"
import Table from "../components/sectionTable/Table"
import useFetchGastos from "../hooks/useFetchGastos"
import SectionTable from "../components/sectionTable/SectionTable"
import "./App.css"




function App() {

  const { data, loading, error } = useFetchGastos('http://localhost:8080/api/gastos');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <div className="container">
        <Home />
        <div className="section">
          <SectionTable />
          <Table data={data} />
        </div>
        <PieChart data={data} />
      </div>
      <Footer />

    </>
  )
}

export default App
