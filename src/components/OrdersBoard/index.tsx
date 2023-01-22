import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import * as S from './styles';

interface OrdersBoardProps  {
  title: string;
  icon: string;
  orders: Order[]
}



export function OrdersBoard({title, icon, orders}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  return (
    <S.Board>
      <OrderModal visible={isModalVisible}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      {orders.length ? <S.OrdersContainer>
        {orders.map((order) => (
          <button key={order._id} type='button' onClick={handleOpenModal}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length > 1 ? `${order.products.length} itens` : `${order.products.length} item`}</span>
          </button>
        ))}
      </S.OrdersContainer> : null}
    </S.Board>
  );
}
