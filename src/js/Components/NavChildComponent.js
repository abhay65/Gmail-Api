var React = require('react');
var GrandChildComponent = require('./GrandChild');
var GrandChildComponent1 = require('./GrandChild1');
var NavChildComponent = React.createClass({
render: function(){
  return(
    <div className="myNavBar">
    <nav className="navbar" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Hybrid Gmail App</a>
          </div>
<span/><span/><span/><span/><span/><span/><span/>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="button" class="btn btn-info">
           <span class="glyphicon glyphicon-search"></span> Search
         </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><img src="pic.ico" alt="Smiley face" width="35" height="50" /></li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Setting <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li>
                                  <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
                              </li>                               <li>
                                  <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
                              </li>                               <li>
                                  <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
                              </li>                               <li className="divider"></li>                               <li>
                                  <a href="#"><span className="glyphicon glyphicon-off"></span> Sign out</a>
                              </li>
                </ul>               </li>
            </ul>
          </div>

      </nav>

    </div>
  );
}
});
// render(<MainComponent/>,document.getElementById('app'));
module.exports = NavChildComponent;
