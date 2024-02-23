import About from '~/pages/About'
import Article from '~/pages/Article'
import ArtistDetail from '~/pages/ArtistDetail'
import Artists from '~/pages/Artists'
import Cart from '~/pages/Cart'
import Events from '~/pages/Events'
import Home from '~/pages/Home'
import News from '~/pages/News'
import Podcasts from '~/pages/Podcasts'
import Product from '~/pages/Product'
import Profile from '~/pages/Profile'
import Releases from '~/pages/Releases'
import Signin from '~/pages/Signin'
import Signup from '~/pages/Signup'
import Store from '~/pages/Store'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/SignIn', component: Signin },
  { path: '/SignUp', component: Signup },
  { path: '/artists', component: Artists },
  { path: '/releases', component: Releases },
  { path: '/events', component: Events },
  { path: '/podcasts', component: Podcasts },
  { path: '/store', component: Store },
  { path: '/news', component: News },
  { path: '/article', component: Article },
  { path: '/product', component: Product },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  { path: '/artistdetail', component: ArtistDetail }
]

export { publicRoutes }
