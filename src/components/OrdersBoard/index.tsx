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

      {orders.length ? <S.OrdersContainer>
        {orders.map((order) => (
          <button key={order._id} type='button'>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length > 1 ? `${order.products.length} itens` : `${order.products.length} item`}</span>
          </button>
        ))}
      </S.OrdersContainer> : null}
    </S.Board>
  );
}
