export default {
  addCart (state, action) {
    let newCart = state.cart
    if (state.cart.some(item => action.id === item.id)) {
      newCart = state.cart.map(item => {
        if (action.id === item.id) {
          item.count += 1
        }
        return item
      })
    } else {
      action.count = 1
      newCart.push({
        ...action,
        count: 1
      })
    }
    state.cart = newCart
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  reduceCount (state, id) {
    state.cart = state.cart.reduce((result, item) => {
      if (item.id === id) {
        item.count -= 1
      }
      if (item.count >= 1) {
        result.push(item)
      }
      return result
    }, [])
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  addCount (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  addHistory (state, word) {
    if (state.historys.includes(word)) {
      state.historys.splice(state.historys.indexOf(word), 1)
    }
    state.historys.unshift(word)
    window.localStorage.setItem('tl-history', state.historys.join(','))
  },
  clearHistory (state) {
    state.historys = []
    window.localStorage.removeItem('tl-history')
  },
  changeChecked (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  allChecked (state, e) {
    state.cart = state.cart.map(item => {
      item.isChecked = e.target.checked
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  changeCurrentId (state, id) {
    state.currentId = id
  },
  changeName (state, newName) {
    state.loginName = newName
  },
  changeHomeId (state, id) {
    state.homeId = id
  },
  changeBackUrl (state, url) {
    state.backUrl = url
  },
  addBrowseId (state, obj) {
    state.browseId.unshift(obj)
  },
  delBrowseId (state) {
    state.browseId.pop()
  },
  splBrowseId (state, index) {
    state.browseId.splice(index, 1)
  }

}
