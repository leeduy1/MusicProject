import Artists from '~/pages/Artists'
import Events from '~/pages/Events'
import Home from '~/pages/Home'
import Podcasts from '~/pages/Podcasts'
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
  { path: '/store', component: Store }
]

export { publicRoutes }
