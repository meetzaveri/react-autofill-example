export function autoComplete(arr, input) {
  const filteredData = arr.filter(item =>
    item.toLowerCase().includes(input.toLowerCase())
  );
  return filteredData;
}
