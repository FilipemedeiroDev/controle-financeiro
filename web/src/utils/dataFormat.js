
export function formatDate(date) {
  let data = new Date(date);

  if (data.getUTCDate() === 1) {
      if (data.getMonth() === 11) {
          let dataFormatada = (data.getUTCDate() < 10 ? "0" + data.getUTCDate() : data.getUTCDate()) + "/1/" + (data.getFullYear() + 1);
          return dataFormatada;
      }
      let dataFormatada = (data.getUTCDate() < 10 ? "0" + data.getUTCDate() : data.getUTCDate()) + "/" + ((data.getMonth() + 2 < 10 ? "0" + 2 : data.getMonth() + 2 )) + "/" + data.getFullYear();
      return dataFormatada
  }
  let dataFormatada = ((data.getUTCDate() < 10 ? "0" + data.getUTCDate() : data.getUTCDate()) + "/" + ((data.getMonth() + 1 < 10 ? "0" + (data.getMonth() + 1) : data.getMonth() + 1) )+ "/" + data.getFullYear());
  return dataFormatada
}