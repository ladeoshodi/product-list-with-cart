import { IImage } from "./image";

export interface IDessert {
  id: number;
  image: IImage;
  name: string;
  category: string;
  price: number;
}
