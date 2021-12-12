import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/Product/Product';
import ProductList from '../pages/ProductList/ProductList';
import Register from '../pages/Register/Register';


export const routerPaths ={
    HOME: '/',
    CART: '/cart',
    LOGIN: '/login',
    REGISTER: '/register',
    PRODUCT: '/product', 
    PRODUCT_LIST: '/product/list',
}


export const router =[
    {path: routerPaths.HOME, component:Home,  exact :true},
    {path: routerPaths.CART, component:Cart,  exact :true},
    {path: routerPaths.LOGIN, component:Login,  exact :true},
    {path: routerPaths.REGISTER, component:Register,  exact :true},
    {path: routerPaths.PRODUCT, component:Product,  exact :true},
    {path: routerPaths.PRODUCT_LIST, component:ProductList,  exact :true},
    
]