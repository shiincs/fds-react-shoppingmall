import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser, UserConsumer } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

// PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 사용된다. (실무에서)
export default withRouter(withUser(HeaderView));

// 인덱스페이지에서 로그아웃 시에도 헤더를 유지하기 위해 키를 넘겨준다.
// export default function Header(props) {
//   return (
//     <UserConsumer>
//       {value => <HeaderView key={value.username} {...value} />}
//     </UserConsumer>
//   );
// }
