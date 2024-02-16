export class FoodAddition {
  id: number
  name: string
  price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }
}

export enum AdditionsType {
  Single,
  Multi,
}

export class Food {
  id: number
  name: string
  image: string
  category: string
  description: string
  price: number
  additions: Array<FoodAddition>
  additionsType: AdditionsType

  constructor(
    id: number,
    name: string,
    image: string,
    category: string,
    description: string,
    price: number,
    additions: Array<FoodAddition>,
    additionsType: AdditionsType
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.category = category
    this.description = description
    this.price = price
    this.additions = additions
    this.additionsType = additionsType
  }
}

export class Restaurant {
  id: number
  name: string
  image: string
  preview: string
  category: string
  feed: Array<Food>

  constructor(
    id: number,
    name: string,
    image: string,
    preview: string,
    category: string,
    feed: Array<Food>
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.preview = preview
    this.category = category
    this.feed = feed
  }
}

export class CartItem {
  food: Food
  count: number
  selectedAdditions: Array<FoodAddition>

  constructor(
    food: Food,
    count: number,
    selectedAdditions: Array<FoodAddition>
  ) {
    this.food = food
    this.count = count
    this.selectedAdditions = selectedAdditions
  }
}
