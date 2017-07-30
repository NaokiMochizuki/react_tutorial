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
  render: function(){
    //markdownからHTMLにコンバートするライブラリ、remarkable.jsの使用
    var md = new Remarkable();
    //propsでは属性として渡された値を取得
    //props.childrenでは、間に挟まれたノード(この場合はThis is ~~~っていう文字)を渡してるっぽい
    return(
      <div className='comment'>
        <h2 className='commentAuthor'>
          { this.props.author }
        </h2>
        { md.render(this.props.children.toString()) }
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);

