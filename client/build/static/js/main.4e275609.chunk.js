(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},31:function(e){e.exports=["Appliances","Home","Woodworking","Graphic Design","Lawn","Cosmetics","Food","Cooking","Gardening","House Plants","Decorating","Event Planning","Video Games","Tabletop Games","Model Building","Hair","Technology","Etiquette","Sports","Self","Plumbing","Education","Music","Coding","Cars","Health","Carpentry","Metal Work","Drawing","Acting","Landscaping","Electrical","Fashion","Sewing","Physical Training","Cardio Training","Diet"]},32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(28),c=a.n(l),r=(a(37),a(9)),s=a(11),i=a(1),m=a(3),u=a.n(m),d={signupUser:function(e){return u.a.post("/api/user/signup",e)},loginUser:function(e){return u.a.post("/api/user/login",e)},getUser:function(e){return u.a.get("/api/user/"+e)},getTrending:function(){return u.a.get("/api/post")},getPostByCategories:function(e){return u.a.get("/api/post/cat/"+e)},getAllUserPosts:function(e){return u.a.get("/api/post/"+e)},logoutUser:function(){return u.a.post("/api/user/logout")},createPost:function(e){return u.a.post("/api/post/1",e)},getUserPost:function(e){return u.a.get("/api/post/1/"+e)},getUserCategories:function(e){return u.a.get("/api/user/cat/"+e)},updateUserCategories:function(e){return u.a.post("/api/user/cat/1",e)},removeUserCategory:function(e){return u.a.post("/api/user/rcat/",e)},deleteUserPost:function(e){return u.a.delete("/api/post/"+e)},findCommentByPost:function(e){return u.a.get("/api/comment/"+e)},createComment:function(e,t){return u.a.post("/api/comment/"+e,t)},deleteComment:function(e){return u.a.delete("/api/comment/"+e)},uploadPhoto:function(e){return u.a.post("/api/user/updatePhoto",e)},updateUser:function(e,t){return u.a.put("/api/user/"+e,t)}},g=a(6),f=a(7);a(55);var p=function(e){return o.a.createElement("button",e,e.value)};a(56);function E(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function v(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",Object.assign({className:"form-control textArea",rows:"20"},e)))}function b(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{class:"my-1 mr-2",for:"inlineFormCustomSelectPref"},"Categories"),o.a.createElement("select",Object.assign({class:"custom-select my-1 mr-sm-2",id:"inlineFormCustomSelectPref"},e),o.a.createElement("option",{selected:!0},"Choose..."),o.a.createElement("option",{value:"Appliance"},"Appliance"),o.a.createElement("option",{value:"Home"},"Home"),o.a.createElement("option",{value:"Lawn"},"Lawn"),o.a.createElement("option",{value:"Hair"},"Hair"),o.a.createElement("option",{value:"Cosmetics"},"Cosmetics"),o.a.createElement("option",{value:"Technology"},"Technology"),o.a.createElement("option",{value:"Social"},"Social"),o.a.createElement("option",{value:"Games"},"Games")))}function h(e){return o.a.createElement(p,{value:"Post",onClick:e.onClick,disabled:e.disabled})}a(57);var N=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),l=a[0],c=a[1];function r(e){var t=e.target,a=t.name,n=t.value;c(Object(f.a)({},l,Object(g.a)({},a,n)))}return o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"create-post-btn","data-toggle":"modal","data-target":"#exampleModal"},"Create +"),o.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"New Post"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement(E,{onChange:r,name:"postTitle",placeholder:"Title (required)"}),o.a.createElement(v,{onChange:r,name:"postBody",placeholder:"Body (required)"}),o.a.createElement(b,{onChange:r,name:"categories"})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement(h,{onClick:function(e){e.preventDefault(),d.createPost({postTitle:l.postTitle,postBody:l.postBody,categories:l.categories,username:localStorage.getItem("usernameMOAT"),profilePicture:localStorage.getItem("profilePicMOAT")}).then(function(e){200===e.status&&window.location.reload()}).catch(function(e){return console.log(e)}),console.log(l)},value:"Post",disabled:!l.postTitle||!l.postBody}))))))};a(58);var y=function(){var e=Object(n.useState)(window.location.pathname),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){l(window.location.pathname)},[a]),o.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light",style:{display:"/"===window.location.pathname||"/signin"===window.location.pathname||"/signup"===window.location.pathname?"none":"block"}},o.a.createElement("div",{className:"container"},o.a.createElement(r.b,{className:"navbar-brand",to:"/dashboard",onClick:function(){return l("/dashboard")}},o.a.createElement("img",{src:"/img/moat_logo_color.png",alt:"MOAT Logo",className:"logo mr-2"}),o.a.createElement("h1",{className:"logo-name"},"MOAT")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav navbar-right text-center ml-auto"},localStorage.getItem("usernameMOAT")?o.a.createElement("li",{className:"nav-item"},o.a.createElement("div",{className:"nav-link username inactive text-muted"},"Hi, ",localStorage.getItem("usernameMOAT"))):"",o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"/dashboard"===window.location.pathname?"nav-link active":"nav-link inactive",to:"/dashboard",onClick:function(){return l("/dashboard")}},"Dashboard")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"/categories"===window.location.pathname?"nav-link active":"nav-link inactive",to:"/categories",onClick:function(){return l("/categories")}},"Categories")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"/account"===window.location.pathname?"nav-link active":"nav-link inactive",to:"/account",onClick:function(){return l("/account")}},"Account")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link",to:"/",onClick:function(){return l("/"),d.logoutUser(),localStorage.removeItem("usernameMOAT"),localStorage.removeItem("profilePicMOAT"),void localStorage.removeItem("categoryMOAT")}},"Logout"))))))};var w=function(e){return e.lineNum,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",{className:"mb-2"},"Welcome to MOAT."),o.a.createElement("h4",{className:"tagline"},"Master of All Trades")),o.a.createElement("p",null,"A place for hobbyists and professionals to exchange advice."))};var O=function(e){var t=e.userInfo,a=e.handleInputChange,n=Object.keys(t);return o.a.createElement("form",null,n.map(function(e){return o.a.createElement("div",{className:"form-group",key:e},o.a.createElement("input",{value:t[e],onChange:a,name:e,type:e,className:"form-control",id:"input".concat(e.charAt(0).toLocaleUpperCase()).concat(e.substring(1)),placeholder:e.toLocaleLowerCase()}))}))};a(13);var C=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(i.a)(e,2),a=t[0],l=t[1];return o.a.createElement("div",{id:"signinPage"},o.a.createElement("div",{className:"welcome-side"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("img",{src:"/img/moat_logo_white.png",alt:"MOAT Logo",className:"logo"}),o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",{className:"logo-name"},"MOAT"),o.a.createElement("h4",{className:"tagline text-white"},"Master of All Trades")),o.a.createElement("p",{className:"text-white"},"A place for hobbyists and professionals to exchange advice."))),o.a.createElement("div",{className:"form-side"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(O,{userInfo:a,handleInputChange:function(e){var t=e.target,n=t.name,o=t.value;l(Object(f.a)({},a,Object(g.a)({},n,o)))}}),o.a.createElement(p,{className:"btn btn-primary mb-3 signinBtn",value:"sign in",onClick:function(e){e.preventDefault(),console.log(a),d.loginUser(a).then(function(e){console.log(e),localStorage.setItem("usernameMOAT",e.data.username),localStorage.setItem("profilePicMOAT",e.data.profilePicture),localStorage.setItem("categoryMOAT",e.data.categoryPreferences),200===e.status&&(window.location.href="/dashboard")}).catch(function(e){return console.log(e)})},disabled:!a.username||!a.password}),o.a.createElement("p",{className:"or"},"OR"),o.a.createElement("p",null,"Create your account by"),o.a.createElement("div",null,o.a.createElement("a",{href:"/signup",className:"font-weight-bold signup-link"},"signing up here.")))))};var k=function(){var e=Object(n.useState)({firstName:"",lastName:"",username:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],l=t[1];return o.a.createElement("div",{id:"signupPage"},o.a.createElement("div",{className:"welcome-side"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("img",{src:"/img/moat_logo_white.png",alt:"MOAT Logo",className:"logo"}),o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",{className:"logo-name"},"MOAT"),o.a.createElement("h4",{className:"tagline text-white"},"Master of All Trades")),o.a.createElement("p",{className:"text-white"},"A place for hobbyists and professionals to exchange advice."))),o.a.createElement("div",{className:"form-side"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(O,{userInfo:a,handleInputChange:function(e){var t=e.target,n=t.name,o=t.value;l(Object(f.a)({},a,Object(g.a)({},n,o)))}}),o.a.createElement(p,{className:"btn btn-primary mb-3 signupBtn",value:"sign up",onClick:function(e){e.preventDefault(),console.log(a),d.signupUser(a).then(function(e){console.log(e),localStorage.setItem("usernameMOAT",e.data.username),localStorage.setItem("profilePicMOAT",e.data.profilePicture),localStorage.setItem("categoryMOAT",e.data.categoryPreferences),200===e.status&&(window.location.href="/dashboard")}).catch(function(e){return console.log(e)})},disabled:!a.username||!a.password||!a.email}),o.a.createElement("p",{className:"or"},"OR"),o.a.createElement("p",null,"Already have an account?"),o.a.createElement("div",null,o.a.createElement("a",{href:"/signin",className:"font-weight-bold signup-link"},"Sign in here.")))))};var P=function(e){var t=e.children;return e.props,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},t))};a(64);var j=function(e){var t=e.post,a=e.modalId,l=e.commentsArray,c=e.getUser,r=e.getTrending,s=Object(n.useState)({username:localStorage.getItem("usernameMOAT"),profilePicture:localStorage.getItem("profilePicMOAT")}),m=Object(i.a)(s,2),u=m[0],E=m[1],b=Object(n.useState)({}),h=Object(i.a)(b,2),N=h[0],y=h[1],w=Object(n.useState)(),O=Object(i.a)(w,2),C=(O[0],O[1]);Object(n.useEffect)(function(){console.log("viewpostmodal useEffect"),console.log("commentsRendered: ".concat(JSON.stringify(N)))},[N.length>=0]);var k=function(e){d.findCommentByPost(e).then(function(t){console.log("rerender comments by postId (".concat(e,"): ").concat(JSON.stringify(t.data.commentsArray))),y(t.data.commentsArray),C(t.data.commentsArray.length)})},P=function(e,t){console.log("deleting postId: "+t+" commentId: "+e),d.deleteComment(e).then(function(e){200===e.status&&(k(t),console.log(e))})};function j(e){return o.a.createElement("div",{className:"modal-dialog",role:"document"},e.map(function(e){return o.a.createElement("div",{className:"modal-content",key:e._id},o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",{className:"d-flex align-items-center mb-3"},o.a.createElement("div",{className:"profile-picture ml-0 mr-2",style:{backgroundImage:"url(".concat(e.profilePicture,")")}}),o.a.createElement("p",{className:"modal-title",id:"viewPostModalLabel"},"Posted by        ",e.username)),o.a.createElement("p",{className:"description text-left"},e.commentBody)),o.a.createElement("div",{className:"modal-footer"},localStorage.getItem("usernameMOAT")===e.username?o.a.createElement(p,{id:e._id,onClick:function(){return P(e._id,e.postID)},value:"delete"}):""))}))}function S(e){return o.a.createElement("p",{className:"commentsNum  mb-3 font-weight-bold description text-left"},e," Comments")}return o.a.createElement("div",null,o.a.createElement("div",{className:"modal view-modal fade",id:"viewPostModal".concat(a),tabindex:"-1",role:"dialog","aria-labelledby":"viewPostModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{className:"profile-picture mr-2",style:{backgroundImage:"url(".concat(t.profilePicture,")")}}),o.a.createElement("p",{className:"modal-title",id:"viewPostModalLabel"},"Posted by        ",t.username)),o.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),console.log(t),console.log(u),c?c():r()},className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",{className:"titles mb-3"},o.a.createElement("h3",{className:"title text-left mb-3"},t.postTitle),o.a.createElement("p",{className:"description text-left"},t.postBody)),o.a.createElement("div",{className:"tags-w-num  mb-3 d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"tags d-flex"},t.categories.map(function(e){return o.a.createElement("h6",{className:"tag",key:e},e)}))),N.length>=0?S(N.length):S(l.length),o.a.createElement(v,{id:"commentBody",rows:"4",cols:"50",onChange:function(e){var t=e.target,a=t.name,n=t.value;E(Object(f.a)({},u,Object(g.a)({},a,n)))},value:u.commentBody,name:"commentBody",placeholder:""})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement(p,{id:t._id,disabled:!u.commentBody,onClick:function(e){console.log("when click create comment -> post_id: "+t._id+" event.target.id "+e.target.id);var a=Object(f.a)({postID:t._id},u);console.log("comment info to be sent to backend"+JSON.stringify(a)),d.createComment(t._id,a).then(function(e){console.log(e),200===e.status&&(k(t._id),E(Object(f.a)({},u,{commentBody:""})))})},value:"comment"})),o.a.createElement("hr",{style:{width:"90%"}}),N.length>=0?j(N):j(l)))))};a(65);var S=function(e){var t=e.post,a=(e.posts,e.getUser),l=e.getTrending,c=Object(n.useState)([]),r=Object(i.a)(c,2),s=r[0],m=r[1];Object(n.useEffect)(function(){console.log("userpost useEffect")},[s.length>0]);var u=function(){d.findCommentByPost(t._id).then(function(e){console.log("comments for post id(".concat(t._id,"): ").concat(JSON.stringify(e.data.commentsArray))),m(e.data.commentsArray),g()})},g=function(){return o.a.createElement(j,{modalId:t._id,post:t,commentsArray:s,getUser:a,getTrending:l,key:t._id})};return o.a.createElement(P,null,o.a.createElement("div",{className:"description-w-btn d-flex  justify-content-between mb-3"},o.a.createElement("div",{className:"image-title"},o.a.createElement("div",{className:"title d-flex align-items-center text-left"},o.a.createElement("div",{className:"profile-picture mr-2",style:{backgroundImage:"url(".concat(t.profilePicture,")")}}),o.a.createElement("p",null,t.username))),o.a.createElement("div",{className:"buttons d-flex"},o.a.createElement(p,{className:"viewBtn align-self-start ml-auto",id:t._id,value:"view","data-toggle":"modal","data-target":"#viewPostModal".concat(t._id),onClick:function(e){e.preventDefault(),console.log("when click view button (post._id): "+t._id),u()}}),g(),a?o.a.createElement(p,{className:"deleteBtn align-self-start ml-3",id:t._id,value:"delete",onClick:function(){return e=t._id,console.log("Deleting post id: "+e),void d.deleteUserPost(e).then(function(e){200===e.status&&a()}).catch(function(e){return console.log(e)});var e}}):"")),o.a.createElement("h3",{className:"title text-left mb-3"},t.postTitle),o.a.createElement("p",{className:"description text-left mb-3"},t.postBody),o.a.createElement("div",{className:"tags-w-num d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"tags d-flex"},t.categories.map(function(e){return o.a.createElement("h6",{className:"tag",key:e},e)})),o.a.createElement("p",{className:"commentsNum font-weight-bold"},t.commentsArray.length," Comments")))};function A(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container sticky-inner"},o.a.createElement("ul",{className:"list-group"},t))}function T(e){return o.a.createElement("li",{className:"list-group-item item",onClick:function(){return e.handleCategorySelect(e.categoryPicked)}},e.item)}var x=function(){var e,t=Object(n.useState)({}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)({}),m=Object(i.a)(s,2),u=m[0],g=m[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),E=p[0],v=p[1],b=Object(n.useRef)(null),h=function(){b.current&&v(b.current.getBoundingClientRect().top<=0)};function N(){d.getTrending().then(function(e){g(e.data)}).catch(function(e){return console.log(e)})}function y(e){console.log(e),d.getPostByCategories(e).then(function(e){console.log(e.data),g(e.data)}).catch(function(e){return console.log(e)})}return Object(n.useEffect)(function(){return N(),e=localStorage.getItem("usernameMOAT"),console.log("usernameStored: "+e),console.log(e),d.getUserCategories(e).then(function(e){console.log(e.data),c(e.data),console.log(l)}).catch(function(e){return console.log(e)}),window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",function(){return h})}},[]),console.log(l),o.a.createElement("div",{className:"container",id:"dashboardPage",style:{marginTop:"30px",marginBottom:"100px",minHeight:"100vh"}},o.a.createElement("div",{className:"hero row p-5 mb-3"},o.a.createElement("div",{className:"col-12"},o.a.createElement(w,null))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"sticky-wrapper".concat(E?" sticky":""),ref:b},l.length>0?o.a.createElement(A,null,o.a.createElement("li",{className:"list-group-item font-weight-bold"},"By All Users"),o.a.createElement("li",{className:"list-group-item item",onClick:function(){return N()}},"Trending"),o.a.createElement("br",null),o.a.createElement("li",{className:"list-group-item font-weight-bold"},"By Category"),l.map(function(e){return o.a.createElement(T,{item:e,handleCategorySelect:y,categoryPicked:e})})):o.a.createElement(A,null,o.a.createElement(T,{item:o.a.createElement(r.b,{to:"/categories"},o.a.createElement("span",null,"No categories added. Click here to add categories.")),handleCategorySelect:function(){console.log("test")}}))),o.a.createElement("div",{className:"trending"},o.a.createElement("p",{className:"mb-3 text-center font-weight-bold"},"Trending"),u.length>0?u.map(function(e){return o.a.createElement(S,{post:e,getTrending:N,key:e._id})}):o.a.createElement("p",{className:"display-message text-center mt-5"},"No one has created any posts yet!"))))};var I=function(){var e,t=Object(n.useState)({fileName:null}),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)({}),s=Object(i.a)(r,2),m=s[0],u=s[1],E=(Object(n.useRef)([]),Object(n.useState)({userId:"",profilePic:"",createdPostIds:[],createdCommentsIds:[]})),v=Object(i.a)(E,2),b=v[0],h=v[1],y=Object(n.useState)([]),w=Object(i.a)(y,2),C=w[0],k=w[1],j=Object(n.useState)(),A=Object(i.a)(j,2),T=A[0],x=A[1];function I(){e=localStorage.getItem("usernameMOAT"),console.log("usernameStored: "+e),d.getUser(e).then(function(e){console.log(e.data),h({userId:e.data._id,profilePic:e.data.profilePicture,createdPostsIds:[e.data.createdPosts],createdCommentsIds:[e.data.createdComments]}),u({firstName:e.data.firstName?e.data.firstName:"",lastName:e.data.lastName?e.data.lastName:"",username:e.data.username,email:e.data.email?e.data.email:"",password:""})}).then(function(){d.getAllUserPosts(e).then(function(e){console.log("alluserpost "+e.data),k(e.data)}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})}Object(n.useEffect)(function(){I()},[]);var M=function(){d.updateUser(localStorage.getItem("usernameMOAT"),m).then(function(e){console.log(e.data),e.data.code?x("".concat(Object.keys(e.data.keyValue).toLocaleString().charAt(0).toLocaleUpperCase()).concat(Object.keys(e.data.keyValue).toLocaleString().substring(1)," already exists")):(console.log("updated user info"),localStorage.setItem("usernameMOAT",m.username),x("Successfully updated"),window.location.reload())}).catch(function(e){return console.log("updating user info err: "+e)})};return o.a.createElement("div",{id:"accountPage"},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"user-image",style:{}},o.a.createElement("div",{className:"profile-picture",style:{backgroundImage:"url(".concat(b.profilePic,")")}}),o.a.createElement("p",{className:"font-weight-bold my-3"},"Upload Profile Picture"),o.a.createElement("div",{class:"custom-file"},o.a.createElement("input",{type:"file",className:"custom-file-input mb-3",id:"customFile",onChange:function(e){var t=e.target.files[0];c({file:t})}}),o.a.createElement("label",{className:"custom-file-label",for:"customFile"},"Choose file"),o.a.createElement(p,{className:"btn btn-primary updateBtn",value:"Upload",onClick:function(e){console.log(l.file);var t=l.file,a=new FormData;a.append("filetoupload",t),console.log(a),d.uploadPhoto(a).then(function(e){console.log("Successfully uploaded profile pic!"),console.log("picture: "+JSON.stringify(e.data.profilePicture)),localStorage.setItem("profilePicMOAT",e.data.profilePicture),window.location.reload()}).catch(function(e){return console.log("Failed uploading picture.",e)})}})),o.a.createElement("div",{className:"mt-5"},o.a.createElement("p",null,m.firstName,", ",m.lastName),o.a.createElement("p",null,m.username),o.a.createElement("p",null,m.email))),o.a.createElement("div",{className:"col user-info"},o.a.createElement("p",{className:"mb-3 text-center font-weight-bold"},"Update Information"),o.a.createElement(O,{userInfo:m,handleInputChange:function(e){var t=e.target,a=t.name,n=t.value;u(Object(f.a)({},m,Object(g.a)({},a,n)))}}),o.a.createElement(p,{className:"btn btn-primary updateBtn",value:"save",onClick:function(e){e.preventDefault(),console.log(m);var t=/.+@.+\..+/;t.test(m.email)?x("Password has to be at least 6 characters"):x("Invalid email form"),m.password.length>=6&&t.test(m.email)&&(x(""),M())},disabled:!m.username||!m.email}),o.a.createElement("div",{className:"errMsg",key:"errMsg"},T))))),o.a.createElement("div",{className:"container yourPosts"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"add-post",style:{}},o.a.createElement(P,{className:"add-post-card"},o.a.createElement("p",{className:"mr-3 mb-2 font-weight-bold"},"Add Post"),o.a.createElement(N,null))),o.a.createElement("div",{className:"posts",style:{}},o.a.createElement("p",{className:"mb-3 text-center font-weight-bold"},"Your Posts"),o.a.createElement("div",{className:"user-posts",id:b.userId},C.length>0?C.map(function(e){return o.a.createElement(S,{post:e,getUser:I,key:e._id})}):o.a.createElement("div",{className:"description-w-btn d-flex mb-3"},o.a.createElement("p",{className:"description text-left"},"No Posts Yet")))))))};var M=function(){return o.a.createElement("div",{id:"404Page"},o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))},U=a(31);var B=function(){var e,t=Object(n.useState)({}),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),m=s[0],u=(s[1],Object(n.useRef)(null));function g(){e=localStorage.getItem("usernameMOAT"),console.log("usernameStored: "+e),console.log("user"+e),d.getUserCategories(e).then(function(e){console.log("get user res"+e.data),c(e.data),console.log("get user cat",l)}).catch(function(e){return console.log(e)})}return Object(n.useEffect)(function(){g()},[l.length]),console.log(l),o.a.createElement("div",{className:"container",id:"categoriesPage",style:{marginTop:"30px",marginBottom:"100px",minHeight:"100vh"}},o.a.createElement("div",{className:"hero row p-5 mb-3"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"welcome"},o.a.createElement("h1",{className:"mb-2"},"Categories"),o.a.createElement("h4",{className:"tagline"},"Master of All Trades")),o.a.createElement("p",null,"A place to learn just about anything. Choose your trades and master them.")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"sticky-wrapper".concat(m?" sticky":""),ref:u},o.a.createElement("ul",{class:"list-group sticky-inner"},o.a.createElement("li",{class:"list-group-item font-weight-bold"},"Your Categories"),l.length>0?l.map(function(t){return o.a.createElement("li",{className:"list-group-item"}," ",t,o.a.createElement("button",{className:"float-right ml-2",onClick:function(){return function(t){console.log("x button"+t),d.removeUserCategory({categoryPreferences:t,username:e}).then(function(e){console.log("removeCat response "+e.data),g()})}(t)}}," X "))}):o.a.createElement("li",{className:"list-group-item"},o.a.createElement("div",{className:"row"},"It looks like you don't have any categories yet."),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},"Just click some categories that you are interested in to get started")))),o.a.createElement("div",{className:"trending"},o.a.createElement("p",{className:"mb-3 text-center font-weight-bold"},"Select Categories"),o.a.createElement("div",{class:"categories-container"},U.sort().map(function(t){return o.a.createElement("a",{href:"#",key:t.id,className:"category-boxes"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body",onClick:function(){return function(t){if(console.log("category "+t),e=localStorage.getItem("usernameMOAT"),console.log("category "+e),""===t)return console.log("not found)");d.updateUserCategories({categoryPreferences:t,username:e}).then(function(e){console.log("newCat response "+e.data),g()})}(t)}},t)))})))))};a(66);console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_MY_TEST_VARIABLE);var _=function(){return o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:["/","/signin"]},o.a.createElement(C,null)),o.a.createElement(s.a,{exact:!0,path:"/signup"},o.a.createElement(k,null)),o.a.createElement(s.a,{exact:!0,path:"/dashboard"},o.a.createElement(x,null)),o.a.createElement(s.a,{exact:!0,path:"/account"},o.a.createElement(I,null)),o.a.createElement(s.a,{exact:!0,path:"/categories"},o.a.createElement(B,null)),o.a.createElement(s.a,null,o.a.createElement(M,null)))))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.4e275609.chunk.js.map