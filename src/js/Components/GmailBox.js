var React = require('react');
var GmailLeft=require('./GmailLeft');
var NavChildComponent=require('./NavChildComponent');
var GmailRightSideChild=require('./GmailRightSideChild');
var ComposeComponent= require('./ComposeComponent');
var GmailBox = React.createClass({
  getInitialState: function() {
    return ({labelData: [], inbox: [], allMessages: [], MessageDetail: []});
  },

 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var VALIDURL    =   'https://www.googleapis.com/oauth2/v4/token?access_token=';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';
   var CLIENTID    =   '145167837557-8v5dt4iorfcmnmbja66h7j2tgclvc63j.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {
       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
              //  console.log("gToken.."+localStorage.getItem('gToken'));
              //  console.log("gTokenType.."+localStorage.getItem('gTokenType'));
              //  console.log("gExprireIn.."+localStorage.getItem('gExprireIn'));
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.my_label();
   this.displayInbox();
 },


 my_label: function()
   {
       var accessToken = localStorage.getItem('gToken');
       $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/abhay.cgctc%40gmail.com/labels?key={AIzaSyDnay-0XkTQrgJ0SXIR0txZGSjcxkL_2eo}',
        dataType: 'json',
        type: 'GET',
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
        success: function(data)
        {
          this.setState({labelData:data.labels});
          console.log("Helllo");
          console.log(data.labels);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
     });
   },
  encode: function(subject) {
     var enc_subject = Utilities.base64Encode(subject, Utilities.Charset.UTF_8);
     return '=?utf-8?B?' + enc_subject + '?=';
   },

displayInbox: function(){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/abhay.cgctc%40gmail.com/messages?labelIds=INBOX&maxResults=10&key={AIzaSyDnay-0XkTQrgJ0SXIR0txZGSjcxkL_2eo}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(msg)
   {

     var display_data = msg.messages
     for(var key in display_data){
       var id = display_data[key].id;

       this.displayInboxMessages(id);
     }
     this.setState({allMessages:this.state.MessageDetail});
     this.state.MessageDetail=[];
     //console.log(id);

   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},

displayInboxMessages: function(msg_id){
  var accessToken = localStorage.getItem('gToken');
  $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/abhay.cgctc%40gmail.com/messages/'+msg_id+'?key={AIzaSyDnay-0XkTQrgJ0SXIR0txZGSjcxkL_2eo}',
   dataType: 'json',
   type: 'GET',
   beforeSend: function (request)
   {
     request.setRequestHeader("Authorization", "Bearer "+accessToken);
   },
   success: function(inbox)
   {
     this.state.MessageDetail.push(inbox);
    // this.setState({inbox:inbox.messages});
   }.bind(this),
    async:false,
     error: function(xhr, status, err) {
     console.error(err.toString());
   }.bind(this)

});
},

render: function(){
 return(


   <div>
          <NavChildComponent />
  <div className="col-md-12">
         <button id="authorize-button" onClick={this.gmailLogin}
                   className="btn btn-primary pull-right">Login</button>
                   <a href="#myModal"
                   data-toggle="modal"
                   id="compose-button"
                   className="btn btn-primary pull-right">Compose</a>
                   <ComposeComponent/>

                  <div className="col-md-2">
                     <GmailLeft labelData={this.state.labelData}/>
                 </div>
                 <div className="col-md-10">
                     <GmailRightSideChild allMessagesData={this.state.allMessages}/>
                 </div>
     </div>

</div>



 );
}
});
module.exports = GmailBox;
