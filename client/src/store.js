import { createStore } from 'vuex';

export const store = createStore({
    state: {
        token: null,
        user: null,
        isLogged: false
    },
    mutations: {
        setToken (state, token) {
            state.token  = token
            state.isLogged = !!(token)
        },
        setUser (state, user) {
            state.user  = user
        }

    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        }

    }
})