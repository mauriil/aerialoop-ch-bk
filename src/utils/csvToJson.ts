export default function csvToJson(csvFile: string) {
  const lines = csvFile.split('\n');

  const result = [];

  const headers = lines[0].split(',');
  const formattedHeaders = headers.map((header) => header.replace(/^\s+/g, ''));

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < formattedHeaders.length; j++) {
      obj[formattedHeaders[j]] = currentline[j];
    }

    if (!!currentline[0]) {
      result.push(obj);
    }
  }
  return result;
}
