var SyncInput = React.createClass({
    getInitialState: function() {
        return { "text" : "hello!" };
    },
    handleChange: function(event) {
        console.log(this.state.text);
        this.setState({ "text" : event.target.value });

    },
    render: function() {
        return (
            <div>
                <input type="text" value = { this.state.text } onChange={ this.handleChange }/>
                <p>{ this.state.text }</p>
            </div>
        );
    }
})
ReactDOM.render(
    <SyncInput />
    ,document.getElementById("root")
)

