var Hello = React.createClass({
    getInitialState: function() {
        return { "opa" : .5 };
    },
    componentWillMount: function() {
        // 组件被添加到真实DOM之前被调用的方法
        
    },
    componentDidMount: function() {
        // 被添加到真实DOM中时改变组件的透明度
        setInterval(function() {
            let opa = this.state.opa;
            opa -= 0.05;
            if(opa < 0) {
                opa = 1.0;
            }
            this.setState({ "opa" : opa });
        }.bind(this), 100);

        // 调用了ajax方法
        
    },
    componentWillUpdate: function(nextProps, nextState) {
        
    },
    componentDidUpdate: function(prevProps, prevState) {
        
    },
    componentWillUnmount: function() {
        
    },
    render: function() {
        return(
            <div style = {{ opacity: this.state.opa }}>
                Hello World!!
            </div>
        )
    }
});
ReactDOM.render(
    <Hello />
    ,document.getElementById("root")
);