import * as S from './style';

const Item = ({ list }) => {
  console.log(list);
  return (
    <div>
      <S.Image />

      <S.Content>
        <S.Header>
          <p className="name">{list.product_name}</p>
          <p className="time">{list.time}</p>
        </S.Header>
        <p className="state">상품 상태 : {list.product_state}</p>
        <p className="price">{list.price}</p>
      </S.Content>
    </div>
  );
};

export default Item;
