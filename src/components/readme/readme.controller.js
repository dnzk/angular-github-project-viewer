import showdown from 'showdown';

class ReadmeController {
  constructor($state, UserModel, $sce) {
    'ngInject';

    this.$sce = $sce;
    this.converter = new showdown.Converter();
    this.header = `${$state.params.user} / ${$state.params.project}`;

    UserModel.getRepo($state.params.user, $state.params.project)
      .then((response) => {
        this.setReadmeContent(atob(response.data.content));
      })
      .catch((error) => {
        this.setNoContent();
      })
  }
  setReadmeContent(mdContent) {
    let html = this.converter.makeHtml(mdContent);
    this.content = this.$sce.trustAsHtml(html);
  }
  setNoContent() {
    this.content = this.$sce.trustAsHtml('<h1>This repo has no readme</h1>');
  }
}

export default ReadmeController;