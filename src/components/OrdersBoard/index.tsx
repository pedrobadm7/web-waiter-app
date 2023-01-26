/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import * as S from './styles';
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}



export function OrdersBoard({
  title,
  icon,
  orders,
  onCancelOrder,
  onChangeOrderStatus
}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const status = selectedOrder && selectedOrder.status === 'WAITING'
    ? 'IN_PRODUCTION'
    : 'DONE';

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  async function handleChangeOrderStatus() {
    try {
      setIsLoading(true);
      if (!selectedOrder) return;

      await api.patch(`/orders/${selectedOrder._id}`, { status });

    } catch (e) {
      console.log(e);
    } finally {
      toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado.`);
      onChangeOrderStatus(selectedOrder!._id, status);
      setIsLoading(false);
      setIsModalVisible(false);

    }
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    try {
      setIsLoading(true);
      if (!selectedOrder) return;

      await api.delete(`/orders/${selectedOrder._id}`);
    } catch (e) {
      console.log(e);
    } finally {
      toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);
      setIsLoading(false);
      setIsModalVisible(false);
      onCancelOrder(selectedOrder!._id);
    }
  }

  return (
    <S.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        loading={isLoading}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      {orders.length ? <S.OrdersContainer>
        {orders.map((order) => (
          <button key={order._id} type='button' onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length > 1 ? `${order.products.length} itens` : `${order.products.length} item`}</span>
          </button>
        ))}
      </S.OrdersContainer> : null}
    </S.Board>
  );
}
