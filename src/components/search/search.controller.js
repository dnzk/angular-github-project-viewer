class SearchController {
  constructor($state) {
    this.$state = $state;
  }
  search(username) {
    if (username) {
      this.$state.go('user', {
        user: username
      });
    }
  }
}

export default SearchController;