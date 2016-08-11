var React=require("react");
var GmailRightSideGrand =require('./GmailRightSideGrand');
var GmailRightSideChild = React.createClass({
 render: function() {
     that=this;
     var rows=[];
     this.props.allMessagesData.forEach(function(msg) {
     var msgSubject,msgFrom,mgsDate;

     for(var headerIndex=0; headerIndex <msg.payload.headers.length;headerIndex++)
     {

       if(msg.payload.headers[headerIndex].name=='Subject'){
         msgSubject=msg.payload.headers[headerIndex].value;
       }
       if(msg.payload.headers[headerIndex].name=='From'){
         msgFrom=msg.payload.headers[headerIndex].value;
         var fields= msgFrom.split(/</);
         msgFrom=fields[0];
       }
       if(msg.payload.headers[headerIndex].name=='Date'){
        mgsDate =msg.payload.headers[headerIndex].value;
       }

     }


    rows.push(   <GmailRightSideGrand msgSubject={msgSubject}  msgFrom={msgFrom}   mgsDate={mgsDate} key= {msg.id} />);


   });
    return (

    <table className="table table-inbox table-hover">
      <thead>
        <tr>
          <th>From</th>
          <th>Subject</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>

    );
 }

});
module.exports=GmailRightSideChild;
