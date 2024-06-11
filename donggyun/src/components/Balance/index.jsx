import { BoxList } from '../Box-List';
import { Frame } from '../Frame';
import Header from '../Header';

const data = [
  {
    subject: '최근 등록 밸런스',
    postList: [
      {
        id: 1,
        left: '치킨',
        right: '피자',
      },
      {
        id: 2,
        left: '맥북',
        right: '갤럭시북',
      },
      {
        id: 3,
        left: '아이패드',
        right: '갤럭시탭',
      },
      {
        id: 4,
        left: '소주',
        right: '맥주',
      },
    ],
  },
  {
    subject: '랜덤 밸런스',
    postList: [
      {
        id: 5,
        left: '아메리카노',
        right: '라떼',
      },
    ],
  },
];

const Balance = () => {
  return (
    <>
      {data.map((section) => (
        <Frame key={section.subject}>
          <Header>{section.subject}</Header>
          {section.postList.map((item) => (
            <BoxList key={item.id}>
              <p>{item.left}</p>
              <span>vs</span>
              <p>{item.right}</p>
            </BoxList>
          ))}
        </Frame>
      ))}
    </>
  );
};

export default Balance;
