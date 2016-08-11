var React = require('react');
var GrandChildComponent1 = React.createClass({
render: function(){
  return(
    <div>
     <h1>I am Second Grand Child Component </h1>
    </div>
  );
}
});
// render(<MainComponent/>,document.getElementById('app'));
module.exports = GrandChildComponent1;
