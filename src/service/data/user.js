const user = (api) => ({

  getUserById(ids) {
    const queryString = ids.map((id) => `id=${id}`).join('&');
    return api.get(`users?${queryString}`);
  },

  getUserByUserName(usernames) {
    const queryString = usernames.map((name) => `username=${name}`).join('&');
    return api.get(`users?${queryString}`);
  },

});

export default user;
