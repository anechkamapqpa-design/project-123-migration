export interface SaleWork {
  src: string;
  title: string;
  size: string;
  price: string;
}

export const saleWorks: SaleWork[] = [
  { src: '/images/work1.png', title: 'Untitled I', size: '60 × 80 cm', price: '€ 1 200' },
  { src: '/images/work3.png', title: 'Untitled II', size: '50 × 70 cm', price: '€ 950' },
  { src: '/images/work5.png', title: 'Untitled III', size: '80 × 100 cm', price: '€ 2 400' },
  { src: '/images/work7.png', title: 'Untitled IV', size: '40 × 60 cm', price: '€ 800' },
  { src: '/images/work9.png', title: 'Untitled V', size: '90 × 120 cm', price: '€ 3 100' },
  { src: '/images/work11.png', title: 'Untitled VI', size: '70 × 90 cm', price: '€ 1 800' },
];
