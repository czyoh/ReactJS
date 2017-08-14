var MyText = React.createClass({
    getInitialState: function() {
        return { liked: true };
    },
    doClick: function() {
        // 调用了这个方法之后，就会通知reactjs去刷新组件
        this.setState({ liked: !this.state.liked });
    },
    render: function() {
        var text = this.state.liked? "喜欢" : "不喜欢";
        return (
            <p onClick={ this.doClick }>
                你{ text }{ this.props.text }吗？
            </p>
        )
    }
});

ReactDOM.render(
    <div>
        <MyText text="reactjs"/>
        <MyText text="angularjs"/>
    </div>
    ,document.getElementById("root")
);