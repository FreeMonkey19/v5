(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){e.exports=a(68)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(32),r=a.n(o),c=(a(39),a(7)),i=a(8),s=a(3),u=a(10),m=a(9),h=a(14),d=a(1),p=(a(40),a(41),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"title-container"},l.a.createElement("div",{className:"main-page-title"},l.a.createElement("h1",{className:"title"},"Application Station:")),l.a.createElement("div",{className:"page-subtitle"},l.a.createElement("h2",{className:"header-subtitle"},"Your Search Stops Here!"))))}}]),a}(n.Component)),g=(a(42),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"main-nav",title:"main-nav-bar"},l.a.createElement("span",{className:"nav-link-container",title:"main-nav-link"},l.a.createElement(h.b,{className:"nav-link",to:"/home"},"Home")),l.a.createElement("span",{className:"nav-link-container",title:"main-nav-link"},l.a.createElement(h.b,{className:"nav-link",to:"/all_listings"},"All Listings")),l.a.createElement("span",{className:"nav-link-container",title:"main-nav-link"},l.a.createElement(h.b,{className:"nav-link",to:"/logout"},"Logout")))}}]),a}(n.Component)),E=a(17),v=a(12),b=a.n(v),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:"",password_confirmation:"",registrationErrors:""},n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.name,l=a.email,o=a.password,r=a.password_confirmation;b.a.post("".concat("https://application-station.herokuapp.com/","api/users/registrations"),{user:{name:n,email:l,password:o,password_confirmation:r}}).then((function(e){console.log("this is the response"),201===e.status&&t.props.handleSuccessfulAuth(e.data)})).catch((function(e){console.log("registration error",e)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"centered search-params"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"New to this site?"),l.a.createElement("h4",null,"Register Here"),l.a.createElement("label",{htmlFor:"name"},"Name",l.a.createElement("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleChange,required:!0})),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("label",{htmlFor:"password"},l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),l.a.createElement("label",{htmlFor:"password"},l.a.createElement("input",{type:"password",name:"password_confirmation",placeholder:"Password_confirmation",value:this.state.password_confirmation,onChange:this.handleChange,required:!0})),l.a.createElement("button",{type:"submit"},"Register")))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",loginErrors:""},n.handleSumbit=n.handleSumbit.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSumbit",value:function(e){var t=this,a=this.state,n=a.email,l=a.password;b.a.post("".concat("https://application-station.herokuapp.com/","api/users/login"),{user:{email:n,password:l}}).then((function(e){console.log("from login",e),200===e.status&&t.props.handleSuccessfulAuth(e.data)})).catch((function(e){console.log("login error",e)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"search-params"},l.a.createElement("form",{onSubmit:this.handleSumbit},l.a.createElement("h3",null,"Returning User?"),l.a.createElement("h4",null,"Sign In Here"),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("label",{htmlFor:"password"},l.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),l.a.createElement("button",{type:"submit"},"Login")))}}]),a}(n.Component),j=a(15),O=(a(65),function(e){var t=e.jobs;return l.a.createElement("div",{className:"outer-div"},t.map((function(e){return l.a.createElement("div",{key:e.id,className:"job-container card w-25 p-3 job-container"},null===e.company_logo?l.a.createElement("h3",null,"No Logo Available"):l.a.createElement("img",{className:"job-image",src:e.company_logo,alt:"..."}),l.a.createElement("h3",{className:"card-title"},null===e.company_url?l.a.createElement("h3",null,e.url):l.a.createElement("a",{href:e.company_url,target:"_blank",rel:"noopener noreferrer",placeholder:"No logo available"},l.a.createElement("h5",null,"More Info"))),l.a.createElement("div",{className:"card-footer"},l.a.createElement("h6",{className:"card-title"},"Title: ",e.title),l.a.createElement("h6",{className:"card-title"},"Location: ",e.location),l.a.createElement("h6",{className:"card-title"},"Date Created: July 23, 2020")))})))});var S=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("".concat("https://application-station.herokuapp.com/","api/job_listings?page=2")).then((function(e){return e.json().then((function(e){o(e.jobs)}))}))}),[]),l.a.createElement("div",{className:"job"},l.a.createElement(O,{jobs:a}))},y=(a(66),a(19),"".concat("https://application-station.herokuapp.com/","api/job_listings?")),k=a(12),w=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),c=Object(j.a)(r,2),i=c[0],s=c[1],u=Object(n.useState)([]),m=Object(j.a)(u,2),h=m[0],d=m[1],p=[],g=h.jobs;for(var E in g)p.push(g[E]);return l.a.createElement("div",null,l.a.createElement("div",{className:"search-params"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),k.get("".concat(y,"description=").concat(i,"&location=").concat(a)).then((function(e){d(e.data)}))}},l.a.createElement("label",{htmlFor:"location"},"Location",l.a.createElement("select",{id:"location",value:a,placeholder:"Location",onChange:function(e){return o(e.target.value)},onBlur:function(e){return o(e.target.value)}},l.a.createElement("option",null,"Portland"),l.a.createElement("option",null,"Remote"),l.a.createElement("option",null,"San Francisco"),l.a.createElement("option",null,"Seattle"),l.a.createElement("option",null,"Vancouver"))),l.a.createElement("label",{htmlFor:"description"},"description",l.a.createElement("select",{id:"description",value:i,placeholder:"Description",onChange:function(e){return s(e.target.value)},onBlur:function(e){return s(e.target.value)}},l.a.createElement("option",null,"Engineering"),l.a.createElement("option",null,"Javascript"),l.a.createElement("option",null,"Python"),l.a.createElement("option",null,"React"),l.a.createElement("option",null,"Software Developer"))),l.a.createElement("button",null,"Submit"))),l.a.createElement("div",{className:"outer-div"},p.map((function(e){return l.a.createElement("div",{className:"listing-container card w-25 p-3",key:e.id},null===e.company_logo?l.a.createElement("h3",null,"No Logo Available"):l.a.createElement("img",{className:"listing-image",src:e.company_logo,alt:"..."}),l.a.createElement("h5",{className:"card-title"},null===e.company_url?l.a.createElement("h3",null,"No Url Available"):l.a.createElement("a",{href:e.company_url,target:"_blank",rel:"noopener noreferrer",placeholder:"No logo available"},"More Info")),l.a.createElement("div",{className:"card-footer"},l.a.createElement("h6",{className:"card-title"},"Title: ",e.title),l.a.createElement("h6",{className:"card-title"},"Location: ",e.location),l.a.createElement("h6",{className:"card-title"},"Date Created: July 23, 2020")))}))))},L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSuccessfulAuth=n.handleSuccessfulAuth.bind(Object(s.a)(n)),n.handleLogoutClick=n.handleLogoutClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleSuccessfulAuth",value:function(e){this.props.handleLogin(e),console.log("right here charlotte"),console.log(e),this.props.history.push("/home")}},{key:"handleLogoutClick",value:function(){var e=this;b.a.delete("/auth/logout").then((function(t){console.log(t),e.props.handleLogout()})).catch((function(e){console.log("logout error",e)})),this.props.history.push("/")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{handleSuccessfulAuth:this.handleSuccessfulAuth}),l.a.createElement(N,{handleSuccessfulAuth:this.handleSuccessfulAuth}))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},n.handleLogin=n.handleLogin.bind(Object(s.a)(n)),n.handleLogout=n.handleLogout.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"checkLoginStatus",value:function(){var e=this;b.a.get("".concat("https://application-station.herokuapp.com/","api/users")).then((function(t){console.log("this is the response"),console.log("this is line 38 app.js"),console.log("check login status response"),console.log(t),t.data.logged_in&&"NOT_LOGGED_IN"===e.state.loggedInStatus?e.setState({loggedInStatus:"LOGGED_IN",user:t.data.user}):!t.data.logged_in&"LOGGED_IN"===e.state.loggedInStatus&&e.setState({loggedInStatus:"NOT_LOGGED_IN",user:{}})})).catch((function(e){console.log("check login error",e)}))}},{key:"componentDidMount",value:function(){this.checkLoginStatus()}},{key:"handleLogout",value:function(){this.setState({loggedInStatus:"NOT_LOGGED_IN",user:{}})}},{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e.user})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,null,l.a.createElement(p,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return l.a.createElement("div",null,l.a.createElement(L,Object.assign({},t,{handleLogin:e.handleLogin,handleLogout:e.handleLogout,loggedInStatus:e.state.loggedInStatus})))}}),l.a.createElement(d.a,{path:"/home"},l.a.createElement(g,null),l.a.createElement("div",{className:"logo"},l.a.createElement("div",{className:"subtitle"}," ",l.a.createElement("h2",null,"Careers taking off daily!"),l.a.createElement("h2",null,"Reserve yours today!")),l.a.createElement(w,null))),l.a.createElement(d.a,{path:"/logout"},l.a.createElement("div",{className:"logo"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,"Thank you for visiting."),l.a.createElement("h3",null,"You are successfully logged out.")),l.a.createElement(f,null),l.a.createElement(N,null))),l.a.createElement(d.a,{path:"/all_listings"},l.a.createElement("div",{className:"logo"},l.a.createElement(g,null),l.a.createElement(S,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.49ff045e.chunk.js.map