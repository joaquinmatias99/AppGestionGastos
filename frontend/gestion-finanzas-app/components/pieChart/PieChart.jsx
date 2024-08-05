import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Datos hardcodeados, posteriormente recibirá una lista como paramentro
  const data = {
    labels: ['Alimentos', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'],
    datasets: [
      {
        label: 'Gastos por Categoría',
        data: [300, 200, 150, 100, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Gastos por Categoría</h2>
      <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default PieChart;
