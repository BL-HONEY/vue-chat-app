import register from './components/register.vue'
import Chatroom from './components/chat.vue'
export default [
    { path:'/', component:register},
    { path:'/register', component:register},
    { path: '/chatroom', component:Chatroom}
]