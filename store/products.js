export const state = () => ({
  categories: [],
  bags: [],
  cart: []
});

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setBags(state, bags) {
    state.bags = bags
  },
  setCart(state, bag) {
    if(state.cart.length) {
      let isBagExist = false;
      state.cart.map(i => {
        if(i.id === bag.id) {
          isBagExist = true;
        }
      });
      if(!isBagExist) {
        state.cart.push(bag)
      }
    } else {
      state.cart.push(bag)
    }
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1)
  }
};

export const actions = {
  async fetchCategories({commit}) {
    const categories = await this.$axios.$get('https://frontend-test.idaproject.com/api/product-category');
    commit('setCategories', categories);
    console.log(categories)
  },
  async fetchBags({commit}) {
    const bags = await this.$axios.$get('https://frontend-test.idaproject.com/api/product?category=1');
    commit('setBags', bags);
    console.log(bags)
  },
  addItemToCart({commit}, bag) {
    commit('setCart', bag)
  },
  deleteItemFromCart({commit}, index) {
    commit('removeFromCart', index)
  }
};

export const getters = {
  categories: state => state.categories,
  bags: state => state.bags,
  cart: state => state.cart,
};
