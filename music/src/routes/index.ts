import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Signin from '~/pages/Signin'
import Signup from '~/pages/Signup'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/SignIn', component: Signin },
  { path: '/SignUp', component: Signup },
]

export { publicRoutes }

