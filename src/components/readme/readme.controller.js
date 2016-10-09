// import MarkdownIt from 'markdown-it';
import showdown from 'showdown';


class ReadmeController {
  constructor($state, UserModel, $sce) {
    // this.md = new MarkdownIt();
    this.converter = new showdown.Converter();
    UserModel.getRepo($state.params.user, $state.params.project)
      .then((response) => {
        // console.log(response);
        // console.log(atob(response.data.content));
        let raw = atob(response.data.content);
        // this.content = $sce.trustAsHtml(raw);
        this.content = $sce.trustAsHtml(this.converter.makeHtml(raw));
        // console.log(this.converter.makeHtml(raw))
        // console.log(this.md.render(raw));
      })
  }
}

export default ReadmeController;