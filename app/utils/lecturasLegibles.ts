export function calidadLegible(calidad: number) {
  if (calidad <= 600) {
    return "Excelente";
  }
  if (calidad <= 800) {
    return "Buena";
  }
  if (calidad <= 1000) {
    return "Aceptable";
  }
  if (calidad <= 1200) {
    return "Regular";
  }
  if (calidad <= 1500) {
    return "Mediocre";
  }
  return "Mala";
}

export function lluviaLegible(lluvia: number) {
  if (lluvia <= 1000) {
    return "Lluvia fuerte";
  }
  if (lluvia <= 2000) {
    return "Lluvia moderada";
  }
  return "Sin lluvia";
}
