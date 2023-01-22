import * as S from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  order: Order | null
}

const status = {
  WAITING: '🕢',
  IN_PRODUCTION: '👩‍🍳',
  DONE: '✅'
};

const statusText = {
  WAITING: 'Fila de espera',
  IN_PRODUCTION: 'Em preparação',
  DONE: 'Pronto'
};

export function OrderModal({visible, order, onClose}: OrderModalProps) {

  // let total = 0;
  // order?.products.forEach(({ product, quantity}) => {
  //   product.price * quantity;
  //   total += product.price * quantity;
  // });

  const total = order?.products.reduce((total, {product, quantity}) => {
    return total + (product.price * quantity);
  }, 0);

  if(!visible || !order) {
    return null;
  }

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt='Ícone de fechar o modal' />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {status[order.status]}
            </span>
            <strong>
              {statusText[order.status]}
            </strong>
          </div>
        </div>

        <S.OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="60"
                  height="52"
                />

                <span className='quantity'>{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total as number)}</strong>
          </div>
        </S.OrderDetails>
      </S.ModalBody>
    </S.Overlay>
  );
}
