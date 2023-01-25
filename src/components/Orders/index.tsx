import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function orderRequest() {
      const { data } = await api.get('/orders');
      setOrders(data);
    }

    orderRequest();
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId));
  }

  return (
    <S.Container>
      <OrdersBoard title='Fila de Espera' icon='🕢' orders={waiting} onCancelOrder={handleCancelOrder} />
      <OrdersBoard title='Em produção' icon='👩‍🍳' orders={inProduction} onCancelOrder={handleCancelOrder} />
      <OrdersBoard title='Pronto' icon='✅' orders={done} onCancelOrder={handleCancelOrder} />
    </S.Container>
  );
}
