import { Order } from '../../types/Order';
import * as S from './styles';

interface OrdersBoardProps  {
  title: string;
  icon: string;
  orders: Order[]
}



export function OrdersBoard({title, icon, orders}: OrdersBoardProps) {
  return (
    <S.Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <S.OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </S.OrdersContainer>
    </S.Board>
  );
}
