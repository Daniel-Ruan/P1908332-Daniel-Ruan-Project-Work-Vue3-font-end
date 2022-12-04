import axios from 'axios';

const state = () => ({
  user: null,
  isRegister: false,
  registerData: null,
  isLogin: false,
  loginData: null
})

const getters = {
    user: state => state.user,
    isRegister: state => state.isRegister,
    isLogin: state => state.isLogin,
    registerData: state => state.registerData,
    loginData: state => state.loginData
}

const actions = {
    async registerUser({ commit }, user) {
        commit('setUserIsCreating', true);
        await axios.post(`${process.env.VUE_APP_API_URL}auth/register`, user)
            .then(res =>{
                commit('saveUserIsCreating', res.data.data);
                commit('setUserIsCreating', false);
            }).catch(err => {
                console.log('error', err);
                commit('setUserIsCreating', false);
            });
    },

    async loginUser({ commit }, user) {
        commit('setUserLogin', true);
        await axios.post(`${process.env.VUE_APP_API_URL}auth/login`, user)
        .then(res =>{
            commit('saveUserIsLogin', res.data.data);
            commit('setUserLogin', false);
        }).catch(err => {
            console.log('error', err);
            commit('setUserLogin', false); 
        }); 
    }
}

const mutations = {
    saveUserIsCreating: (state, user) => {
        state.registerData = user;
    },
    saveUserIsLogin: (state, user) => {
        state.loginData = user;
    },
    setUserIsCreating(state, isRegister) {
        state.isRegister = isRegister;
    },
    setUserLogin(state, isLogin) {
        state.isLogin = isLogin;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}