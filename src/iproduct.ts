
export interface IProduct
{
  id: number;
  Name:{
    [k in string]:string
  };
  quantity: number;
  price: number;
  categoryID: number;
  imgUrl?: string;
  purchaseDate?: Date;
  discount:number

}
