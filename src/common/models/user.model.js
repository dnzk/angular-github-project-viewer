class UserModel {
  constructor($q, $http) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
  }
  getUser(username) {
    return this.$q((resolve, reject) => {
      this.$http({
        method: 'GET',
        url: `https://api.github.com/users/${username}/repos`
      }).then(function (response) {
        resolve(response);
      }, function (error) {
        reject(error);
      });
    });
  }
  getRepo(username, repo) {
    return this.$q((resolve, reject) => {
      this.$http({
        method: 'GET',
        url: `https://api.github.com/repos/${username}/${repo}/readme`
      }).then(function (response) {
        resolve(response);
      }, function (error) {
        reject(error);
      });
    });
  }
}

export default UserModel;