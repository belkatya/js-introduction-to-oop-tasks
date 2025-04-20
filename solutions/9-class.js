import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, count) {
      this.items.push({ item, count });
    }
  
    getItems() {
      return _.cloneDeep(this.items);
    }
  
    getCost() {
      return this.items.reduce((acc, { item, count }) => acc + item.price * count, 0);
    }
  
    getCount() {
      return this.items.reduce((acc, { count }) => acc + count, 0);
    }
  }
// END
