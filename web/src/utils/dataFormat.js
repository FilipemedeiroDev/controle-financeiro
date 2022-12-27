
export function formatDate(date) {
  let data = new Date(date);

  if (data.getUTCDate() === 1) {
      if (data.getMonth() === 11) {
          let dataFormatada = (data.getUTCDate()) + "/1/" + (data.getFullYear() + 1);
          return dataFormatada;
      }
      let dataFormatada = ((data.getUTCDate())) + "/" + ((data.getMonth() + 2)) + "/" + data.getFullYear();
      return dataFormatada
  }
  let dataFormatada = ((data.getUTCDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  return dataFormatada
}