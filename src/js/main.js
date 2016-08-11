var React = require('react');
var ReactDOM = require('react-dom');
var GmailBox=require('./Components/GmailBox');
ReactDOM.render(<GmailBox />,document.getElementById('app'));
/*var MainComponent = React.createClass({
render: function(){
  return(
    <div>

      <NavChildComponent/>


      <div className="container-fluid">
        <div className="row">
         <div className="col-md-2">
          <GmailBox />
       </div>
         <div className="col-md-10" >
          <GmailBox />
        </div>
    </div>
   </div>
    </div>



   )
}
})
render(<MainComponent />,document.getElementById('app'));
*/
