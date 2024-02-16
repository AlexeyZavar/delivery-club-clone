import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Cart from '~/store/cart'

// eslint-disable-next-line import/no-mutable-exports
let cartStore: Cart

function initialiseStores(store: Store<any>): void {
  cartStore = getModule(Cart, store)
}

export { initialiseStores, cartStore }
