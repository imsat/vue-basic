const state = {
    isLoading: false,
}
const getters = {
    isLoading: state => state.isLoading,
}
const mutations = {
    'TOGGLE_LOADING': state => state.isLoading === false ? state.isLoading = true : state.isLoading = false,
}

export default {
    state,
    getters,
    mutations,
}
