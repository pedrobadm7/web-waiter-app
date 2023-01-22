import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard />
      <OrdersBoard />
      <OrdersBoard />
    </S.Container>
  );
}
