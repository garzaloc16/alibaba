function calcular() {
  const medida1 = parseFloat(document.getElementById("medida1").value) || 0;
  const medida2 = parseFloat(document.getElementById("medida2").value) || 0;
  const medida3 = parseFloat(document.getElementById("medida3").value) || 0;
  const valorCBM = parseFloat(document.getElementById("valorCBM").value) || 0;

  // Convertimos centímetros a metros
  const m1 = medida1 / 100;
  const m2 = medida2 / 100;
  const m3 = medida3 / 100;

  // Calculamos CBM (volumen en metros cúbicos)
  const cbm = m1 * m2 * m3;

  // Calculamos costo total
  const costo = cbm * valorCBM;

  // Mostramos resultados
  document.getElementById("cbm").textContent = cbm.toFixed(3);
  document.getElementById("costo").textContent = costo.toLocaleString("es-CO");
}
