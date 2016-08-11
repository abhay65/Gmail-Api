var React = require('react');
var GrandChildComponent = React.createClass({
render: function(){
  return(
    <div>
     <h1>I am Grand Child Component</h1>
    </div>
  );
}
});
// render(<MainComponent/>,document.getElementById('app'));
module.exports = GrandChildComponent;
