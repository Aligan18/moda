import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/Product/ProductPage';
import ProductList from '../pages/ProductList/ProductList';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import ProductControlPage from '../pages/Admin/ProductControlPage/ProductControlPage';
import ProductInfo from '../pages/Admin/ProductEdit/ProductEdit';


export const routerPaths ={
    HOME: '/',
    CART: '/cart',
    LOGIN: '/login',
    REGISTER: '/register',
    PRODUCT: '/product/', 
    PRODUCT_LIST: '/products/category/',
    SEARCH_PRODUCTS: '/products/search/',
    DASHBOARD: '/dashboard',
    ADMIN_PRODUCT_LIST: '/dashboard/products/',
    ADMIN_PRODUCT_INFO:'/dashboard/product/:id' 
}
export const dynamicRouterPaths ={
   
    PRODUCT: '/product/:id', 
    PRODUCT_LIST: '/products/category/:category',
    
}


export const PublicRouter =[
    {path: routerPaths.HOME, component:Home,  exact :true},
    {path: routerPaths.LOGIN, component:Login,  exact :true},
    {path: routerPaths.REGISTER, component:Register,  exact :true},
    {path: dynamicRouterPaths.PRODUCT, component:Product,  exact :true},
    {path: dynamicRouterPaths.PRODUCT_LIST, component:ProductList,  exact :true},
    {path: routerPaths.SEARCH_PRODUCTS, component:ProductList,  exact :true},
    
    
]

export const PrivatRouter =[
    {path: routerPaths.HOME, component:Home,  exact :true},
    {path: routerPaths.CART, component:Cart,  exact :true},
    {path: dynamicRouterPaths.PRODUCT, component:Product,  exact :true},
    {path: dynamicRouterPaths.PRODUCT_LIST, component:ProductList,  exact :true},
    {path: routerPaths.SEARCH_PRODUCTS, component:ProductList,  exact :true},
    
]

export const DashboardRouter =[
    {path: routerPaths.HOME, component:Home,  exact :true},
    {path: routerPaths.CART, component:Cart,  exact :true},
    {path: dynamicRouterPaths.PRODUCT, component:Product,  exact :true},
    {path: dynamicRouterPaths.PRODUCT_LIST, component:ProductList,  exact :true},
    {path: routerPaths.SEARCH_PRODUCTS, component:ProductList,  exact :true},
    //Admin routes
    {path: routerPaths.DASHBOARD, component:Dashboard,  exact :true},
    {path: routerPaths.ADMIN_PRODUCT_LIST, component:ProductControlPage,  exact :true},
    {path: routerPaths.ADMIN_PRODUCT_INFO, component:ProductInfo,  exact :true},
    
]