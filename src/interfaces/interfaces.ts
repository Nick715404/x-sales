export interface IBrand {
  id: string;
  name: string;
  description: string;
};

export interface IMobileNavImages {
  facebook: string,
  inst: string,
  youtube: string
};

export interface ISocialsImages {
  facebook: string,
  inst: string,
  youtube: string
}

export interface IProducts {
  id: number,
  title: string
  brand: string,
  category: string,
  description: string,
  discountPercentage?: number,
  images: string[],
  price: number,
  rating?: number,
  stock?: number,
  thumbnailPath: string,
}

export interface INavLink {
  label: string,
  href: string
}

export interface IFilterTag {
  value: string
  label: string
}

export interface IPost {
  id: string
  title: string
  subTitle: string
  body: string
  imgPath?: string
  thumbnailPath?: string
}

export interface ITabs {
  id: number
  text: string
  img: string
}

export interface MobileNavProps {
  openMenu: boolean
}

export interface ISingleProduct {
  id: string
  title: string
  body: string
  rating: number
  link: string
  thumbnailPath?: string
  type: string
}

export interface IReview {
  id?: string
  rating: number
  name: string
  body: string
}