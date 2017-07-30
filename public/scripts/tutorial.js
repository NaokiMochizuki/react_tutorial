var CommentBox = React.createClass({
  render: function(){
    return(
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={ this.props.data } />
        <CommentForm />
      </div>
    );
  }
});

//コメントを取得したデータから表示させるように変更
var CommentList = React.createClass({
  render: function(){
    var commentNode = this.props.data.map(function(comment){
      return(
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      );
    });

    return(
      <div className='commentList'>
        { commentNode }
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

// 一番親から渡すdata propsを定義(本当はAPI経由で持ってくるやつ)
var data = [
  {id: 1, author: "田中太郎", text: "This is one comment"},
  {id: 2, author: "山田次郎", text: "This is *another* comment"}
];

// dataをpropsとして渡す
ReactDOM.render(
  <CommentBox data={ data } />,
  document.getElementById('content')
);

