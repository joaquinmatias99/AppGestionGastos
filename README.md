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

**Estado actual**

El backend está en gran parte terminado, falta documentar con Swagger y agregar HandlerException para una mejor claridad en el codigo y dockerizar.

La página principal ha sido desarrollada con un diseño limpio y funcional. La interfaz muestra un resumen general de la aplicación y proporciona acceso a las principales funcionalidades.

![Home](/docs/paginaPrincipal.png)

Se ha integrado un gráfico de pastel que visualiza la distribución de gastos. Este gráfico permite a los usuarios ver de manera clara y concisa cómo se dividen sus gastos en diferentes categorías. El gráfico está diseñado para ser interactivo y se actualiza automáticamente con la información más reciente.

![PieChart](/docs/pieChart.png)

El modal de gasto ha sido implementado para permitir a los usuarios agregar nuevos gastos de manera eficiente. Incluye un formulario con campos para categoría, detalle, monto y fecha. Además, el modal se cierra correctamente al hacer clic fuera de él o al presionar el botón de cerrar.
Este modal es reutilizado para otras funciones.

![Modal](/docs/modalGasto.png)