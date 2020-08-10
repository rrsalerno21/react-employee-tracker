export default {
  async getUsers() {
    return fetch("https://randomuser.me/api/?results=100&nat=us").then((res) =>
      res.json()
    );
  },
};
