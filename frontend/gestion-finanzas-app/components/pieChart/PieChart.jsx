import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchGastos from '../../hooks/useFetchGastos';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { data, loading, error } = useFetchGastos('http://localhost:8080/api/gastos');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Transformar los datos de la API al formato esperado por Chart.js
  const categorias = [...new Set(data.map(gasto => gasto.categoria))];
  const montosPorCategoria = categorias.map(categoria => 
    data.filter(gasto => gasto.categoria === categoria)
        .reduce((acc, gasto) => acc + gasto.monto, 0)
  );

  const chartData = {
    labels: categorias,
    datasets: [
      {
        label: 'Gastos por Categoría',
        data: montosPorCategoria,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white',  // Cambiar el color de las etiquetas a blanco
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Gastos por Categoría</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
