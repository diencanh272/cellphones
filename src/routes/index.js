//*Layout
import HeaderOnly from '~/components/layouts/HeaderOnly/HeaderOnly';
//*Page
import Admin from '~/pages/Admin';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import Payment from '~/pages/Payment';
import Login from '~/pages/Login';
import Cart from '~/pages/Cart';

//*Public Route
const publicRoute = [
    { path: '/', component: Home },
    { path: '/admin', component: Admin, layout: null },
    { path: '/detail', component: Detail },
    { path: '/cart/payment', component: Payment, layout: HeaderOnly },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/cart', component: Cart, layout: HeaderOnly },
];

//*Private Route (redirect Login Page)
const privateRoute = [];

export { publicRoute, privateRoute };
