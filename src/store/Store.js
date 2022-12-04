
import { createStore, createLogger } from 'vuex';
import product from './modules/Product';
import auth from './modules/Auth';
import user from './modules/User';

const debug = process.env.NODE_ENV !== 'production'

const Store = createStore({
  modules: {
    auth,
    product,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default Store;