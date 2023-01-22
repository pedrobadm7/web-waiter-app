import * as S from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

interface OrderModalProps {
  visible: boolean;
  order: Order | null
}

export function OrderModal({visible, order}: OrderModalProps) {
  if(!visible || !order) {
    return null;
  }

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt='Ícone de fechar o modal' />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>🕢</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <S.OrderDetails>
          <strong>Itens</strong>
        </S.OrderDetails>
      </S.ModalBody>
    </S.Overlay>
  );
}
