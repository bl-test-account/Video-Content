/*
Get the current location and user information by calling
BL.getContext.The returned object contains the lightGroupId,
lightGroupName, and userId properties.
*/
context = BL.getContext();
 /*
Retrieve static content with Bl.getStaticContent.
Static content is stored as an object with properties
equal to the identifiers of each piece of content. Each property
contains an array with the content corresponding
to each update of the app.
*/
var savedContent = BL.getStaticContent(APP.appId);
var src = savedContent.video_url[0];
$('video source')[0].src = src; //('src', src)
//alert($('video source')[0].src)