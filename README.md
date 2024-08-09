# Gestor de Finanzas

**Descripción:**  
Este proyecto es una aplicación para la gestión de finanzas personales, actualmente en desarrollo. Permite a los usuarios registrar sus gastos, categorizarlos y realizar diversas operaciones para analizar su situación financiera. La aplicación incluye funcionalidades para filtrar gastos, visualizar informes y generar gráficos de torta que muestran el desglose de los gastos por categoría, con la opción de aplicar filtros temporales, como mensual.

**Características principales:**
- Registro y categorización de gastos.
- Operaciones para filtrar y analizar transacciones.
- Visualización de informes financieros.
- Generación de gráficos de torta para desglosar gastos por categoría.
- Filtros temporales para informes mensuales o personalizados.

**Tecnologías usadas:**
- **Backend:** Java, Spring, SpringBoot, H2
- **Frontend:** React, HTML, CSS, JavaScript
- **Otros:** Axios

**Estado actual del proyecto**

El backend está en funcionamiento y en gran parte terminado. Aún falta documentar con Swagger, agregar HandlerException y dockerizar la aplicación.

En cuanto al frontend, estoy dedicando mis esfuerzos a mejorar mis habilidades en React. Aunque la web es sencilla, el objetivo principal es aprender React y aplicar buenas prácticas. Para lograr esto, he enfocado el desarrollo en:

- Desarrollo en React: Implementar la aplicación utilizando React para profundizar en el manejo de estados, efectos y la arquitectura de componentes.

- Aplicación de Buenas Prácticas: Seguir prácticas recomendadas para asegurar un código limpio y mantenible. Esto incluye la componentización para crear elementos reutilizables, el manejo de hooks para controlar el estado y efectos secundarios de manera eficiente, y la validación de props con PropTypes para garantizar la integridad de los datos.

La página principal ha sido desarrollada con un diseño limpio y funcional, y proporciona un resumen general de la aplicación y acceso a las principales funcionalidades.

![Home](/docs/paginaPrincipal.png)

Se ha integrado un gráfico de pastel que visualiza la distribución de gastos. Este gráfico permite a los usuarios ver de manera clara y concisa cómo se dividen sus gastos en diferentes categorías. El gráfico está diseñado para ser interactivo y se actualiza automáticamente con la información más reciente.

![PieChart](/docs/pieChart.png)

El modal de gasto ha sido implementado para permitir a los usuarios agregar nuevos gastos de manera eficiente. Incluye un formulario con campos para categoría, detalle, monto y fecha. 
Además, el modal se cierra correctamente al hacer clic fuera de él o al presionar el botón de cerrar.
Este modal es reutilizado para otras funciones.

![Modal](/docs/modalGasto.png)