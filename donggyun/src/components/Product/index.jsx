import Item from './Item/index.jsx';
import * as S from './style.js';

const data = {
  title: '상품 리스트',
  total_num: 2,
  list: [
    {
      product_name: '지오다노',
      time: '30분 전',
      product_state: '아주 좋아요',
      price: '16,500',
    },
    {
      product_name: '유니클로',
      time: '20분 전',
      product_state: '좋아요',
      price: '23,900',
    },
  ],
};

const Product = () => {
  return (
    <S.Container>
      <S.Header>
        <div>{data.title}</div>
        <div>{data.total_num}개</div>
      </S.Header>

      <S.List>
        <Item list={data.list[0]} />
        <Item list={data.list[1]} />
      </S.List>
    </S.Container>
  );
};

export default Product;
