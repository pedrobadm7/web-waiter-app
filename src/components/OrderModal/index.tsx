import * as S from './styles';
import closeIcon from '../../assets/images/close-icon.svg';

interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({visible}: OrderModalProps) {
  if(!visible) {
    return null;
  }

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa 2</strong>

          <button type='button'>
            <img src={closeIcon} alt='Ícone de fechar o modal' />
          </button>
        </header>
      </S.ModalBody>
    </S.Overlay>
  );
}
