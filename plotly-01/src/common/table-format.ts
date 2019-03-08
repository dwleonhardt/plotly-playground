
export function formatAnimalData(animalData: any): any {
  const headers = Object.keys(animalData)
  const cells = headers.map((it: string) => animalData[it].qty)
  return {
    headers: headers,
    cells: cells
  }
}