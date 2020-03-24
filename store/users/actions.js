export default {

    fetchUser({commit}, id) {
        this.$axios
            .get(`/users/${id}`)
            .then(respond => {
                if(respond.status === 200) {
                    commit('SET_USER', respond.data);
                }
            })
            .catch(error => console.log(error));
    },



    fetchUsers({commit}) {
        this.$axios
            .get('/users')
            .then(respond => {
                if(respond.status === 200) {
                    commit('SET_USERS', respond.data);
                }
            })
            .catch(error => console.log(error));
    },

};
