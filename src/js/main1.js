/*var React = require('react');
var {render} = require('react-dom');
var NavChildComponent=require('./Components/NavChildComponent');
var LeftSide=require("./Components/Leftside.js");
var RightSide=require("./Components/Rightside.js");
var MainComponent = React.createClass({
render: function(){
  return(
    <div>

      <NavChildComponent/>
      <div className="container-fluid">
        <div className="row">
         <div className="col-md-2">
          <LeftSide/>
       </div>
         <div className="col-md-10" >
         <RightSide/>
        </div>
    </div>
   </div>
    </div>



   )
}
})
render(<MainComponent />,document.getElementById('app'));
*/
var ProductRow = React.createClass({
  render: function() {
    var name = this.props.label.type ?
      this.props.label.name :
      <span style={{color: 'red'}}>
        {this.props.label.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.label.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.labels.forEach(function(label) {
      rows.push(<ProductRow label={label} key={label.name} />);

    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});


var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable labels={this.props.labels} />
      </div>
    );
  }
});

var LABELS =[
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_1",
   "name": "Junk",
   "type": "user"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
];




ReactDOM.render(
  <FilterableProductTable labels={LABELS} />,
  document.getElementById('container')
);
