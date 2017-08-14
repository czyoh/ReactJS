var RepoList = React.createClass({
    getInitialState() {
        return { "loadding": true, "items":[]};
    },
    componentDidMount: function() {
        var promise = $.getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars");
        promise.then(function(value) {
            this.setState({
                "loadding": false,
                "items": value.items
            });
        }.bind(this), function() {
            alert("获取数据失败");
        })
    },
    render: function() {
        if(this.state.loadding) {
            return <span>Loadding...</span>
        } else {
            return (
                <div>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>  
                        {
                            this.state.items.map(function(item, index) {
                                return <li key = {index} ><p><a href={ item.html_url }>{ item.name }</a> ({ item.stargazers_count } stars)</p>
                                <p>{ item.description }</p></li>
                            })
                        }                       
                    </ol>
                </div>
            )
        }
    }
});
ReactDOM.render(
    <RepoList />
    ,document.getElementById("root")
);