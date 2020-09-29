export interface IClothes {
  id: string,
  clothesTitle: string,
  url: string,
  onDelete?(id: string): void,
  onEdit?(title: string, id: string): void
}
