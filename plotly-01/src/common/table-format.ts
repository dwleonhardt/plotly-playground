
export function formatAnimalData(animalData: any): any {
  const animals = Object.keys(animalData)
  const cells = animals.map((it: string) => animalData[it].qty)
  animalData.cats.dates.unshift('Animals')
  return {
    headers: animalData.cats.dates,
    animals: animals,
    cells: cells
  }
}