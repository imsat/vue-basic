import router from '../../router/index'
const state = {
    token: localStorage.getItem('user-token') || '',
    user: JSON.parse(localStorage.getItem('user')) || [],
    login_form: {
        email: '',
        password: ''
    },
    register_form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    password_reset_email: {
        email: ''
    },
    password_reset_form: {
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
    },
}

const getters = {
    isAuthenticated: state => !!state.token,
    authenticatedUser: state => state.user,
    login_form: state => state.login_form,
    register_form: state => state.register_form,
    password_reset_email: state => state.password_reset_email,
    password_reset_form : state => state.password_reset_form,

}

const mutations = {
    'AUTH_SUCCESS' (state, token) {
        state.token = token;
        state.login_form = {}
        state.register_form = {}
    },
    'SET_AUTHENTICATED_USER' (state, user) {
        state.user = user;
    },
    'LOGOUT' (state){
        state.user = [];
        state.token = '';
    },
    'login_form' (state, value) {
        state.login_form = value;
        // state.login_form.email = value.email;
        // state.login_form.password = value.password;
    },
    'register_form' (state, value) {
        state.register_form = value;
    },
    'set_password_reset_email' (state, value) {
        state.password_reset_email = value;
    },
    'set_password_reset_form' (state, value) {
        state.password_reset_form = value;
    },
    'CREATE_RESET_PASSWORD' (state, value) {
        state.password_reset_email = {};
    },
    'FIND_RESET_TOKEN' (state, data) {

        state.password_reset_form.email = data.email;
        state.password_reset_form.token = data.token;
    },
    'RESET_PASSWORD' (state, data) {

        state.password_reset_form = {}
    }
}

const actions = {
    LOGIN({commit, dispatch, state}){
        commit('TOGGLE_LOADING');
        // rootState.loading.isLoading = true;
        // rootState.error.errors = [];
        var data = {
            client_id: 2,
            client_secret: 'NMpeUoOZBycoKVFntXOMt13XnUPVtsj4RgOVPwXS',
            grant_type: 'password',
            username: state.login_form.email,
            password: state.login_form.password
        }
        axios({url: '/oauth/token', data: data, method: 'POST' })
            .then(resp => {
                const token = resp.data.access_token;
                const refresh_token = resp.data.refresh_token;
                localStorage.setItem('user-token', token);
                // localStorage.setItem('refresh-token', refresh_token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

                commit('AUTH_SUCCESS', token);
                commit('TOGGLE_LOADING');
                dispatch('GET_AUTHENTICATED_USER')
            })
            .catch(errors => {
                commit('TOGGLE_LOADING');
                console.log(errors)
                if(state.login_form.email.length == 0){
                    commit('SET_ERROR', 'Email field required')
                }else if(state.login_form.password.length == 0){
                    commit('SET_ERROR', 'Password field required')
                }else{
                    commit('SET_ERROR', errors.response.data.message)
                }
                localStorage.removeItem('user-token')
            })
    },

    GET_AUTHENTICATED_USER({commit, state}){
        commit('TOGGLE_LOADING');
        axios.get('/api/user',{headers: { Authorization: 'Bearer '+`${state.token}` }})
            .then(res => {
                commit('TOGGLE_LOADING');
                const user = res.data.data
                localStorage.setItem('user', JSON.stringify(user));
                commit('SET_AUTHENTICATED_USER', user)
                router.push(`/`);
            })
            .catch(errors => {
                commit('TOGGLE_LOADING');
                commit('SET_ERROR', errors)
                localStorage.removeItem('user')
            })
    },
    LOGOUT({commit}){
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('user-token');
        localStorage.removeItem('user');
        // localStorage.removeItem('refresh-token');
        commit('LOGOUT')
    },
    REGISTER({commit, dispatch, state}){
        commit('TOGGLE_LOADING');
        axios.post('/api/users', state.register_form)
            .then(res => {
                commit('TOGGLE_LOADING');
                const user = res.data.data
                localStorage.setItem('user', JSON.stringify(user));
                commit('SET_AUTHENTICATED_USER', user)
                state.login_form.email = state.register_form.email;
                state.login_form.password = state.register_form.password;
                dispatch('LOGIN')
            })
            .catch(error => {
                commit('TOGGLE_LOADING');
                console.log(error)
            })
    },
    CREATE_RESET_PASSWORD({commit, state}){
        commit('TOGGLE_LOADING');
        axios.post('/api/password/create', state.password_reset_email)
            .then(res => {
                commit('TOGGLE_LOADING');
                commit('CREATE_RESET_PASSWORD');
                console.log(res)
            })
            .catch(error => {
                commit('TOGGLE_LOADING');
                console.log(error)
            })
    },
    FIND_RESET_TOKEN({commit}, token){
        axios.get(`/api/password/find/${token}`)
            .then(res => {
                commit('FIND_RESET_TOKEN', res.data);
                // console.log(res)
            })
            .catch(error => {
                commit('TOGGLE_LOADING');
                console.log(error)
            })
    },
    RESET_PASSWORD({commit, state}){
        axios.post('/api/password/reset', state.password_reset_form)
            .then(res => {
                commit('RESET_PASSWORD');
                router.push(`/`);
            })
            .catch(error => {
                commit('TOGGLE_LOADING');
                console.log(error)
            })
    }

}


export default {
    state,
    getters,
    mutations,
    actions
}
