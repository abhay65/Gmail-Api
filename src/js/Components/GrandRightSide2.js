var React=require("react");
//var {render}=require("react-dom");
//var GrandChildComponent=require("./GrandChildComponent.js");
//var GrandChildComponent1=require("./GrandChildComponent1.js");
var GrandRightSide2=React.createClass({
  render:function(){
    return(
              <div>

              <aside className="lg-side">

                                    <div className="inbox-body">
                                       <div className="mail-option">
                                           <div className="chk-all">
                                               <input type="checkbox" className="mail-checkbox mail-group-checkbox"/>
                                               <div className="btn-group">
                                                   <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                                                       All
                                                       <i className="fa fa-angle-down "></i>
                                                   </a>
                                                   <ul className="dropdown-menu">
                                                       <li><a href="#"> None</a></li>
                                                       <li><a href="#"> Read</a></li>
                                                       <li><a href="#"> Unread</a></li>
                                                   </ul>
                                               </div>
                                           </div>

                                           <div className="btn-group">
                                               <a href="#"><span className="glyphicon glyphicon-refresh"></span></a>
                                           </div>
                                           <div className="btn-group hidden-phone">
                                               <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                                                   More
                                                   <i className="fa fa-angle-down "></i>
                                               </a>
                                               <ul className="dropdown-menu">
                                                   <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                                                   <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                                                   <li className="divider"></li>
                                                   <li><a href="#"><i classname="fa fa-trash-o"></i> Delete</a></li>
                                               </ul>
                                           </div>
                                           <div className="btn-group">
                                               <a data-toggle="dropdown" href="#" className="btn mini blue">
                                                   Move to
                                                   <i className="fa fa-angle-down "></i>
                                               </a>
                                               <ul className="dropdown-menu">
                                                   <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                                                   <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                                                   <li classname="divider"></li>
                                                   <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                                               </ul>
                                           </div>

                                           <ul className="unstyled inbox-pagination">
                                               <li><span>1-50 of 234</span></li>
                                               <li>
                                                   <a href="#"><span className="glyphicon glyphicon-rewind"></span></a>
                                               </li>
                                               <li>
                                                   <a href="#"><span className="glyphicon glyphicon-forward"></span></a>
                                               </li>
                                           </ul>
                                       </div>

                                    </div>
                                </aside>


              </div>

            );
            }

            });

          //render(<MainComponent/>,document.getElementById('app'));
          module.exports=GrandRightSide2;
