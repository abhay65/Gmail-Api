var React=require('react');
var {Link} = require('react-router');
var Index = React.createClass({
  render: function() {
     return (
      <div className="row">
      <div className="col-lg-4 col-lg-4 col-lg-4 navbar ">

      <ul>
      <li><Link to = "/About" activeClassName="active">About Us</Link></li>
      <li><Link to = "/ContactUs" activeClassName="active">Contact Us</Link></li>
      </ul>
      </div>
      <div className =" col-lg-8 col-lg-8 col-lg-8">
      {this.props.children}
      </div>
      </div>

     );
   }
 });
module.exports=Index;
