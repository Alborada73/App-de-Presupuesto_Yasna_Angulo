main {
  min-heigth; 50vh;
  display; flex;
  flex-direction; column;
  align-items; center;
  justify-content; center; 
}


let gasto = [];

function agregarGasto() {
  const nombreGasto = document.getElementById("nombre-gasto").value;
  const cantidadGastada = document.getElementById("cantidad-gastada").value;

  gastos.push({
    nombre: nombreGasto,
    cantidad: cantidadGastada
  });

  actualizarTabla();
}

function actualizarTabla() {
  const Gasto = document.getElementById("gasto");

  // Limpiar la tabla antes de agregar los nuevos datos
  Gasto.innerHTML = "gasto";

  // Agregar una fila por cada gasto en la lista
  gasto.forEach(gasto => {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = gasto.nombre;
    fila.appendChild(celdaNombre);

    const celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = gasto.cantidad;
    fila.appendChild(celdaCantidad);

    tablaGastos.appendChild(fila);
  });
}








