var ButtonComponent = React.createClass({
    render: function() {
        return <button className="btn"> { this.props.name } </button>
    }
});
var CommentItemComponent = React.createClass({
    render: function() {
        return <div className="item">
            <img src={ this.props.src } className="portrait" />
            <div className="item-middle">
                <p className="item-uname">{ this.props.uname }</p>
                <p className="item-content">{ this.props.content }</p>
            </div>
            <ButtonComponent name="Reply" />
        </div>
    }
});
var CommentListComponent = React.createClass({
    render: function() {
        return <ul className="CList">
            {
                React.Children.map(this.props.children, function(child) {
                    return <li>{ child }</li>
                })
            }
        </ul>
    }
});
var FormBoxComponent = React.createClass({
    render: function() {
        return <div className="fBox">
            <div className="talkBox">
                <textarea ></textarea>
                <ButtonComponent name="Send" />
            </div>
        </div>
    }
})
var CommentBoxComponent = React.createClass({
    render: function() {
        return <div className="cBox">
            <h2 className="title">Comments</h2>
            {
                React.Children.map(this.props.children, function(child) {
                    return <div className="cBox-list">{ child }</div>
                })
            }
        </div>
    }
})
ReactDOM.render(
<div>
    <CommentBoxComponent>
        <CommentListComponent>
                <CommentItemComponent src="../images/portrait1.jpg" uname="Nate" content="This is a great article!" />
                <CommentItemComponent src="../images/portrait2.jpg" uname="Kevin" content="This is a great article!" />
                <CommentItemComponent src="../images/portrait3.jpg" uname="Ben" content="This is a great article!" />
        </CommentListComponent>
        <FormBoxComponent />
    </CommentBoxComponent>
</div>
    ,document.getElementById("root")
);
   