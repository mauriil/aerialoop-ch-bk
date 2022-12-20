export default function csvToJson(csvFile: string) {
  const lines = csvFile.split('\n');

  const result = [];

  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    if (!!currentline[0]) {
      result.push(obj);
    }
  }
  return result;
}
