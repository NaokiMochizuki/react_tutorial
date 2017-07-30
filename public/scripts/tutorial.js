var CommentBox = React.createClass({
  render: function(){
    return(
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return(
      <div className='commentList'>
        <Comment author='Pate Hunt'>This is one Commnet</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className='commnetForm'>
        Hello world! I am a CommentForm
      </div>
    );
  }
});

var Comment = React.createClass({
  //remarkableの機能を用いてHTML文から危険なリンクを取り除いてくれている
  rawMarkup: function(){
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  },
  render: function(){
    return(
      <div className='comment'>
        <h2 className='commentAuthor'>
          { this.props.author }
        </h2>
        <span dangerouslySetInnerHTML={ this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

