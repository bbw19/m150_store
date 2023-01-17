export const state = () => ({
  api_products: [],
  products: [
    {
      id: 1,
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  },
  ip: 'empty',
  loading: true,
  authUser: null
})

export const getters = {
  getProducts: state => {
    return state.products;
  },
  productsAdded: state => {
    return state.api_products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.api_products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.api_products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.api_products.quantity;
  },
  getIp: state => {
    return state.ip;
  },
  getLoading: state => {
    return state.loading;
  },
  getApiProducts: state => {
    return state.api_products;
  },
  getUser: state => {
    return state.authUser;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.api_products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.api_products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.api_products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.api_products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.api_products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.api_products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.api_products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  },
  SET_IP(state, ip) {
    state.ip = ip
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_API_PRODUCTS(state, data) {
    state.api_products = data
  }
}

export const actions = {
  async getIP ({ commit }) {
    const ip = await this.$axios.$get('http://icanhazip.com')
    commit('SET_IP', ip)
    console.log('splash ass')
    commit('SET_LOADING', false)
  },
  async loadData ({ commit }) {
    const data = await this.$axios.$get('http://localhost:8000/api/index')
    commit('SET_API_PRODUCTS', data.products)
    commit('SET_LOADING', false)
  },
  async login ({ commit }, [email, password]) {
    console.log(email, password)
    const res = await this.$axios.$post('http://localhost:8000/api/auth/login', {
      email: email,
      password: password
    })
    if (res.status) {
      commit('SET_USER', res.token)
      commit('setUserName', res.name)
      commit('isUserLoggedIn', true)
    } else {
      commit('isUserLoggedIn', false)
    }
  },
  async register ({ commit }, [name, email, password]) {
    console.log(email, password)
    const res = await this.$axios.$post('http://localhost:8000/api/auth/register', {
      name: name,
      email: email,
      password: password
    })
    if (res.status) {
      commit('SET_USER', res.token)
      commit('setUserName', name)
      commit('isUserSignedUp', true)
      commit('isUserLoggedIn', true)
    } else {
      commit('isUserSignedUp', false)
      commit('isUserLoggedIn', false)
    }
  },
  logout ({ commit }) {
    commit('SET_USER', null)
    commit('setUserName', '')
    commit('isUserLoggedIn', false);
    commit('isUserSignedUp', false);
    commit('removeProductsFromFavourite');
  },
  async getCart ({ commit, getters }) {
    const res = await this.$axios.$post('http://localhost:8000/api/cart/index', {
      bearer: getters.getUser
    })
    
  },
  async addToCart ({ commit }) {

  },
  async removeFromCart ({ commit }) {

  },
  async syncCart ({ commit }) {

  },
  async pay ({ commit }) {

  }
}

/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
