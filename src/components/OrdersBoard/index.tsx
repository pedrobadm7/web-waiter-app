import * as S from './styles';

export function OrdersBoard() {
  return (
    <S.Board>
      <header>
        <span>🕢</span>
        <strong>Fila de espera</strong>
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
