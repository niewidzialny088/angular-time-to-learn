export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Pomidor',
    price: 799,
    description: 'Wspaniały owoc, który jest warzywem'
  },
  {
    id: 2,
    name: 'Kartofel',
    price: 699,
    description: 'Cud polskiej kuchni, Łotysze nam go zadroszczą'
  },
  {
    id: 3,
    name: 'Ogórek',
    price: 299,
    description: '...zielony, zielony ma garniturek!'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/