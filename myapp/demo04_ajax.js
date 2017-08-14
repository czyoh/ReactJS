var Weather = React.createClass({
    getInitialState() {
        return { "loadding": true, info: ""};
    },
    componentDidMount: function() {
        $.get("http://wthrcdn.etouch.cn/weather_mini?citykey=101240101", function(result) {
            this.setState({"loadding": false, "info": JSON.parse(result).data.forecast[0].date});
        }.bind(this));
    },
    render: function() {
        if(this.state.loadding) {
            return (
            <div>拼命加载中</div>
        )
        } else {
            return <div>{ this.state.info }</div>
        }
        
    }
});
ReactDOM.render(
    <Weather />
    ,document.getElementById("root")
);