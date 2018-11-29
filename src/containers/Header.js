import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';

// PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 사용된다. (실무에서)
export default withUser(HeaderView);
