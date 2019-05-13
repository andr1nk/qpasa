(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(80)},47:function(e,t,a){},48:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(37),c=a.n(r),o=(a(47),a(5)),s=a(4),i=a(7),m=a(6),u=a(8),d=(a(48),a(9)),p=a(11),h=a.n(p),g=h.a.create({baseURL:"https://qpasa.herokuapp.com//api",withCredentials:!0}),v=function(e,t){return g.post("/signup",{username:e,password:t}).then(function(e){return e.data})},b=function(e,t){return g.post("/login",{username:e,password:t}).then(function(e){return e.data})},E=function(){return g.post("/logout").then(function(e){return e.data})},f=function(){return g.get("/loggedin").then(function(e){return e.data})},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedIn:a.props.loggedIn},a.handleLogout=function(){E().then(function(){a.setState({loggedIn:null}),a.props.setUser(null)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loggedIn!==e.loggedIn&&this.setState({loggedIn:this.props.loggedIn})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Q'pasa"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/events-zurich",className:"nav-link"},"Z\xfcrich")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/events-berlin",className:"nav-link"},"Berlin")),this.state.loggedIn?l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item",onClick:this.handleLogout},l.a.createElement(d.b,{to:"/",className:"nav-link"},"logout")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/locations",className:"nav-link"},"locations"))):l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/signup",className:"nav-link"},"Sign up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login"))))))}}]),t}(l.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"my-5 pt-5 text-muted text-center text-small"},l.a.createElement("p",{className:"mb-1"},"\xa92019 Q'pasa"),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",null,"Privacy")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",null,"About")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",null,"Support"))))}}]),t}(l.a.Component),j=(a(75),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"teaser"},l.a.createElement("p",{className:"teaser-heading"},"Q'pasa")),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"description"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),l.a.createElement("div",{className:"buttons"},l.a.createElement(d.b,{to:"/events-zurich"},l.a.createElement("button",{className:"btn btn-lg btn-outline-dark button"},"Z\xfcrich")),l.a.createElement("button",{className:"btn btn-lg btn-outline-dark button"},"Berlin"))))}}]),t}(l.a.Component)),O=a(26),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={viewport:{width:345,height:300,latitude:47.3748365,longitude:8.5325012,zoom:14}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement(O.b,Object.assign({mapboxApiAccessToken:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"https://qpasa.herokuapp.com/"}).MAPBOX_ACCESS_TOKE},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})}}),l.a.createElement(O.a,{latitude:this.state.viewport.latitude,longitude:this.state.viewport.longitude},l.a.createElement("i",{className:"fas fa-map-marker-alt"})))}}]),t}(l.a.Component),C=(a(77),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={events:[],currentMap:null},a.fetchData=function(){h.a.get("https://qpasa.herokuapp.com/api/events").then(function(e){a.setState({events:e.data})})},a.showMapHandler=function(e){console.log("holandow"),a.setState({currentMap:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container event-container"},this.state.events.map(function(t){return l.a.createElement("div",{className:"card event-card",key:t._id},l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title"},t.name),l.a.createElement("p",{className:"card-text"},l.a.createElement("i",{className:"far fa-calendar-alt"}),t.date),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){return e.showMapHandler(t._id)},className:"btn btn-outline-dark",type:"button","data-toggle":"collapse","data-target":"#item-".concat(t._id.toString()),"aria-expanded":"false","aria-controls":"item-".concat(t._id.toString())},"More details")),l.a.createElement("div",{className:"collapse",id:"item-".concat(t._id.toString())},l.a.createElement("div",{className:"card card-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{className:"card-text"},t.description),l.a.createElement("p",{className:"card-text"},l.a.createElement("i",{className:"fas fa-map-marker-alt"})," ",t.location.name," ",l.a.createElement("br",null),t.location.address," ",l.a.createElement("br",null)," ",t.location.city),l.a.createElement("a",{href:t.url,target:"_blank",className:"card-link"},"go to page")),l.a.createElement("div",{className:"col-md-6"},t._id===e.state.currentMap&&l.a.createElement("div",null,l.a.createElement(S,null)))))))))})))}}]),t}(l.a.Component)),k=a(1),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",city:"",GPS:{lat:"",long:""},address:""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;"lat"===t||"long"===t?a.setState({GPS:Object(k.a)({},t,n)}):a.setState(Object(k.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),h.a.post("http://localhost:5000/api/locations",{city:a.state.city,name:a.state.name,GPS:{lat:a.state.GPS.lat,long:a.state.GPS.long},address:a.state.address},{withCredentials:!0}).then(function(){a.props.getData()})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"name"),l.a.createElement("input",{className:"form-control",value:this.state.name,onChange:this.handleChange,name:"name",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"city"),l.a.createElement("input",{className:"form-control",value:this.state.city,onChange:this.handleChange,type:"text",name:"city"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"GPS lat"),l.a.createElement("input",{className:"form-control",value:this.state.GPS.lat,onChange:this.handleChange,type:"text",name:"lat"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"GPS long"),l.a.createElement("input",{className:"form-control",value:this.state.GPS.long,onChange:this.handleChange,type:"text",name:"long"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"address"),l.a.createElement("input",{className:"form-control",value:this.state.address,onChange:this.handleChange,type:"text",name:"address"})),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Add Location"})))}}]),t}(l.a.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={locations:[]},a.getData=function(){h.a.get("http://localhost:5000/api/locations",{withCredentials:!0}).then(function(e){a.setState({locations:e.data})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",margin:"70px"}},l.a.createElement("div",null,this.state.locations.map(function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("div",null,l.a.createElement("h2",null,e.name),l.a.createElement("p",null,"city: ",e.city),l.a.createElement("p",null,"GPS lat: ",e.GPS.lat),l.a.createElement("p",null,"GPS long: ",e.GPS.long),l.a.createElement("p",null,"address: ",e.address),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/locations/".concat(e._id),className:"nav-link"},"Update / Delete Location")))}),l.a.createElement("div",null,l.a.createElement(w,{props:this.props,getData:this.getData}))))}}]),t}(l.a.Component),P=a(23),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={location:{}},a.handleSubmit=function(e){e.preventDefault();var t=a.props.location._id;h.a.put("http://localhost:5000/api/locations/".concat(t),{city:a.state.location.city,name:a.state.location.name,GPS:{lat:a.state.location.GPS.lat,long:a.state.location.GPS.long},address:a.state.location.address},{withCredentials:!0}).then(function(){a.props.getLocation(),a.setState({location:{}})})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;"lat"===t||"long"===t?a.setState({location:Object(P.a)({},a.state.location,{GPS:Object(P.a)({},a.state.location.GPS,Object(k.a)({},t,n))})}):a.setState({location:Object(P.a)({},a.state.location,Object(k.a)({},t,n))}),console.log(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.location;e.location!==a&&this.setState({location:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h3",null,"Edit form"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"name:"),l.a.createElement("input",{className:"form-control",value:this.state.location.name,onChange:this.handleChange,name:"name",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"city:"),l.a.createElement("input",{className:"form-control",value:this.state.location.city,onChange:this.handleChange,type:"text",name:"city"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"GPS lat:"),l.a.createElement("input",{className:"form-control",value:this.state.location.GPS&&this.state.location.GPS.lat,onChange:this.handleChange,type:"text",name:"lat"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"GPS long:"),l.a.createElement("input",{className:"form-control",value:this.state.location.GPS&&this.state.location.GPS.long,onChange:this.handleChange,type:"text",name:"long"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"address:"),l.a.createElement("input",{className:"form-control",value:this.state.location.address,onChange:this.handleChange,type:"text",name:"address"})),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Update Project"})))}}]),t}(l.a.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={location:{}},a.getLocation=function(){var e=a.props.match.params.id;h.a.get("http://localhost:5000/api/locations/".concat(e),{withCredentials:!0}).then(function(e){a.setState({location:e.data})})},a.deleteLocation=function(){console.log("delete method called");var e=a.props.match.params.id;h.a.delete("http://localhost:5000/api/locations/".concat(e)).then(function(e){a.props.history.push("/locations")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this.state.location;console.log("render called: ",e);var t=l.a.createElement(l.a.Fragment,null);return t=l.a.createElement("div",null,l.a.createElement(G,{location:e,getLocation:this.getLocation}),l.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.deleteLocation},"Delete Location")),l.a.createElement("div",{style:{margin:"70px"}},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.city),t,l.a.createElement("br",null),l.a.createElement(d.b,{to:"/locations"},"Back"))}}]),t}(l.a.Component),L=(a(78),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(k.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password;v(n,l).then(function(e){a.props.setUser(e),a.props.history.push("/")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"username: "),l.a.createElement("input",{value:this.state.username,onChange:this.handleChange,type:"text",name:"username"})),l.a.createElement("div",null,l.a.createElement("label",null,"password: "),l.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password"})),l.a.createElement("input",{type:"submit",value:"signup"})))}}]),t}(l.a.Component)),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(k.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password;b(n,l).then(function(e){a.props.setUser(e),a.props.history.push("/")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{margin:"70px"}},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"username"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username})),l.a.createElement("div",null,l.a.createElement("label",null,"password"),l.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password})),l.a.createElement("input",{type:"submit",value:"login"})),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Dont have an account yet?"),l.a.createElement(d.b,{to:"/signup",className:"nav-link"},"Sign up")))}}]),t}(l.a.Component),U=(a(41),a(18)),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedIn:null},a.setUser=function(e){a.setState({loggedIn:e})},a.getUser=function(){f().then(function(e){a.setState({loggedIn:e})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y,{setUser:this.setUser,loggedIn:this.state.loggedIn}),l.a.createElement(U.d,null,l.a.createElement(U.b,{exact:!0,path:"/",component:j}),l.a.createElement(U.b,{exact:!0,path:"/events-zurich",component:C}),l.a.createElement(U.b,{exact:!0,path:"/signup",render:function(t){return l.a.createElement(L,Object.assign({},t,{setUser:e.setUser}))}}),l.a.createElement(U.b,{exact:!0,path:"/login",render:function(t){return l.a.createElement(A,Object.assign({},t,{setUser:e.setUser}))}}),l.a.createElement(U.b,{exact:!0,path:"/locations/:id",render:function(t){return l.a.createElement(D,Object.assign({},t,{user:e.state.loggedIn}))}}),l.a.createElement(U.b,{exact:!0,path:"/locations",user:this.state.loggedIn,render:function(t){return l.a.createElement(x,Object.assign({},t,{user:e.state.loggedIn}))}})),l.a.createElement(N,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);c.a.render(l.a.createElement(d.a,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.a3533ee8.chunk.js.map