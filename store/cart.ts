import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { CartItem } from '~/data/models'

@Module({ name: 'cart', stateFactory: true, namespaced: true })
export default class Cart extends VuexModule {
  items: Array<CartItem> = []
  sum: number = 0

  @Mutation
  addItem(item: CartItem) {
    const found = this.items.find(
      (x) =>
        x.food === item.food &&
        x.selectedAdditions.length === item.selectedAdditions.length &&
        x.selectedAdditions.every(function (element, index) {
          return element.id === item.selectedAdditions[index].id
        })
    )

    if (found) {
      found.count++
    } else {
      this.items.push(item)
    }
  }

  @Mutation
  removeItem(item: CartItem) {
    const index = this.items.findIndex((x) => x === item)

    if (index !== -1) {
      const found = this.items[index]

      found.count--

      if (found.count === 0) {
        this.items.splice(index, 1)
      }
    }
  }

  @Mutation
  recalculateSum() {
    this.sum = 0
    this.items.forEach((cartItem) => {
      let additionsSum = 0
      cartItem.selectedAdditions.forEach(
        (addition) => (additionsSum += addition.price)
      )
      this.sum += (additionsSum + cartItem.food.price) * cartItem.count
    })
  }

  get cartItems() {
    return this.items
  }
}
