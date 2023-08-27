import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [
      {
        shopIdItem: '100',
        imageUrl: '/image/card1.png',
        color: 'brown',
        title: 'Best Sofa',
        price: '1000.50'
      },
      {
        shopIdItem: '101',
        imageUrl: '/image/card2.png',
        color: 'white',
        title: 'New Sofa',
        price: '1000.50'
      },
      {
        shopIdItem: '102',
        imageUrl: '/image/card3.png',
        color: 'white',
        title: 'New Chair',
        price: '300.20'
      },
      {
        shopIdItem: '103',
        imageUrl: '/image/card4.png',
        color: 'white',
        title: 'Modern Chair',
        price: '1000.50'
      },
      {
        shopIdItem: '104',
        imageUrl: '/image/card5.png',
        color: 'black',
        title: 'Best Sofa',
        price: '200.50'
      },
      {
        shopIdItem: '105',
        imageUrl: '/image/card6.png',
        color: 'white',
        title: 'Sofa Chair',
        price: '1000.50'
      },
      {
        shopIdItem: '106',
        imageUrl: '/image/card7.png',
        color: 'brown',
        title: 'Table Chair',
        price: '150.50'
      },
      {
        shopIdItem: '107',
        imageUrl: '/image/card8.png',
        color: 'brown',
        title: 'Hanging Chair',
        price: '500.60'
      },
    ],
    cartItems: [
      {
        shopIdItem: '100',
        imageUrl: '/image/card1.png',
        color: 'brown',
        title: 'Best Sofa',
        price: '1000.50',
        stock: 5
      },
      {
        shopIdItem: '106',
        imageUrl: '/image/card7.png',
        color: 'brown',
        title: 'Table Chair',
        price: '150.50',
        stock: 1
      },
    ]
  },
  getters: {
    totalPrice: state => {
      let total = state.cartItems
          .filter(item => item.stock > 0)
          .reduce((total, item) => {
        return total + (parseFloat(item.price) * item.stock);
      }, 0);
      return total > 0 ? (total < 1000 ? total + 100 : total) : total;
    },
    totalProducts: state => {
      let products = state.cartItems
          .filter(item => item.stock > 0)
          .reduce((total, item) => {
            return total + (parseFloat(item.price) * item.stock);
          }, 0);
      return products;
    },
    hasShippingFee: state => {
      let total = state.cartItems
          .filter(item => item.stock > 0)
          .reduce((total, item) => {
            return total + (parseFloat(item.price) * item.stock);
          }, 0);
      return total < 1000;
    }
  },
  mutations: {
    INCREMENT_STOCK: (state, shopIdItem) => {
      const item = state.cartItems.find(item => item.shopIdItem === shopIdItem);
      if (item) {
        item.stock++;
      }
    },
    DECREMENT_STOCK: (state, shopIdItem) => {
      const item = state.cartItems.find(item => item.shopIdItem === shopIdItem);
      if (item && item.stock > 0) {
        item.stock--;
      }
    },
    REMOVE_ITEM: (state, shopIdItem) => {
      const index = state.cartItems.findIndex(item => item.shopIdItem === shopIdItem);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    ADD_TO_CART: (state, payload) => {
      const item = state.cartItems.find(item => item.shopIdItem === payload.shopIdItem)
      if (item) {
        item.stock++;
      } else {
        state.cartItems.push(payload)
      }

    }
  },
  actions: {
    incrementStock: ({commit}, shopIdItem) => {
      commit('INCREMENT_STOCK', shopIdItem);
    },
    decrementStock: ({commit}, shopIdItem) => {
      commit('DECREMENT_STOCK', shopIdItem);
    },
    removeItem: ({commit}, shopIdItem) => {
      commit('REMOVE_ITEM', shopIdItem);
    },
    addToCart: ({commit}, payload) => {
      commit('ADD_TO_CART', payload)
    }
  },
  modules: {
  }
})
