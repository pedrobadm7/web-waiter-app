import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

const orders = [
  {
    _id: '63cbf7d2d32fb6de5e443ba3',
    table: '7',
    status: 'DONE',
    products: [
      {
        product: {
          name: 'Hamburguer',
          imagePath: '1674309572600-jonathan-borba-8l8Yl2ruUsg-unsplash.jpg',
          price: 35,
        },
        quantity: 1,
        _id: '63cbf7d2d32fb6de5e443ba4'
      }
    ],
  }
] satisfies Order[];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard title='Fila de Espera' icon='🕢' orders={orders}/>
      <OrdersBoard title='Em produção' icon='👩‍🍳' orders={[]}/>
      <OrdersBoard title='Pronto' icon='✅' orders={[]}/>
    </S.Container>
  );
}
