(this.webpackJsonpvirtualtheater=this.webpackJsonpvirtualtheater||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),l=a.n(s),o=(a(39),a(8)),c=a(9),i=a(2),u=a(11),p=a(10),m=a(1),d=a.n(m),h=a(33),v=a(7),g=a(5),f=a.n(g),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isFillingOutForm:!1,rating:n.props.rating,description:n.props.desc,occured:!1},n.handleClick=n.handleClick.bind(Object(i.a)(n)),n.submitForm=n.submitForm.bind(Object(i.a)(n)),n.takeRating=n.takeRating.bind(Object(i.a)(n)),n.takeDescription=n.takeDescription.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){this.state.isFillingOutForm&&!this.state.occured&&(document.getElementById("rating").value=this.props.rating,document.getElementById("desc").value=this.props.desc,this.setState({occured:!0}))}},{key:"takeRating",value:function(e){this.setState({rating:parseFloat(e.target.value)})}},{key:"takeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"handleClick",value:function(){this.setState((function(e){return{isFillingOutForm:!e.isFillingOutForm}}))}},{key:"postApi",value:function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/reviews",t);case 3:a=e.sent,console.log(a.data),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"submitForm",value:function(e){e.preventDefault();var t={id:this.props.reviewId,description:this.state.description,date:(new Date).toUTCString(),rating:this.state.rating,userId:this.props.userId,movieId:this.props.movieId};this.postApi(t),this.setState((function(e){return{isFillingOutForm:!e.isFillingOutForm}}))}},{key:"render",value:function(){return this.state.isFillingOutForm?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("label",null,"Rating:",r.a.createElement("input",{type:"number",onChange:this.takeRating,id:"rating",placeholder:"0.0"}),r.a.createElement("br",null)),r.a.createElement("label",null,"Comment:",r.a.createElement("input",{type:"text",onChange:this.takeDescription,id:"desc",placeholder:"Comment"}),r.a.createElement("br",null)),r.a.createElement("label",null,r.a.createElement("input",{type:"submit",value:"Submit"})))):r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleClick},this.props.bttonText))}}]),a}(n.Component),E=a(4),w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchTerm:"",movieHTML:"",reviewHTML:"",users:[],purchase:""},n}return Object(c.a)(a,[{key:"callApi",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,s,l,o,c,i,u,p,m,v,g,w,k=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.themoviedb.org/3/movie/".concat(this.props.id,"?api_key=").concat("4c97d52803b7ca7abda8da0f425b880b","&language=en-US"));case 3:return t=e.sent,e.next=6,f.a.get("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/reviews");case 6:return a=e.sent,e.next=9,f.a.get("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts");case 9:return n=e.sent,e.next=12,f.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("4c97d52803b7ca7abda8da0f425b880b","&language=en-US"));case 12:s=e.sent,l=t.data,o=n.data,c=a.data.filter((function(e){return e.movieId===l.id})),i=s.data.genres,console.log(i.filter((function(e){return"Action"===e.name}))[0]),u=0,p=Object(h.a)(c);try{for(p.s();!(m=p.n()).done;)v=m.value,u+=v.rating}catch(d){p.e(d)}finally{p.f()}console.log(u,c.length),console.log(l),console.log((100*Math.round(window.innerWidth/100)).toString()),g=r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{background:'url("https://image.tmdb.org/t/p/w500'.concat(l.backdrop_path,'")'),width:"100%",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",gridArea:"fade"}},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,l.title),r.a.createElement("h5",null,"(",l.release_date.substring(0,4),") ",l.runtime," mins"))),r.a.createElement("div",{className:"poster"}," ",r.a.createElement("img",{id:"post",src:"https://image.tmdb.org/t/p/w400"+l.poster_path})," "),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"description"},0===u||0===c.length?r.a.createElement("p",null,"no reviews yet"):r.a.createElement("p",null,new Array(u/c.length).fill(r.a.createElement("span",null,"\u2605"))," - ",c.length," ratings"),r.a.createElement("p",null,l.overview)),r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:l.homepage,target:"_blank"},"Check out the movie website to learn more")),r.a.createElement("div",{className:"buy"},r.a.createElement("button",{onClick:function(){k.props.balance-19.99>0?(k.postDatabase("transactions",{title:l.title,date:(new Date).toUTCString(),image:"https://image.tmdb.org/t/p/w200"+l.poster_path,price:19.99,userId:k.props.userId,movieId:k.props.id}),k.postDatabase("accounts",{id:k.props.userId,balance:k.props.balance-19.99,email:k.props.user.email,password:k.props.user.password,name:k.props.user.name,address:k.props.user.address}),console.log(k.props.balance-19.99),k.setState({purchase:r.a.createElement("p",null,"Congrats on your purchase!")}),alert("Congrats on your purchase!")):(k.setState({purchase:r.a.createElement("p",null,"You dont have the neccessary funds")}),alert("You dont have the neccessary funds or are not logged in"))}},"Buy the movie for $19.99"),r.a.createElement("button",{onClick:function(){k.props.balance-9.99>0?(k.postDatabase("transactions",{title:l.title,date:(new Date).toUTCString(),image:"https://image.tmdb.org/t/p/w200"+l.poster_path,price:9.99,userId:k.props.userId,movieId:k.props.id}),k.postDatabase("accounts",{id:k.props.userId,balance:k.props.balance-9.99,email:k.props.user.email,password:k.props.user.password,name:k.props.user.name,address:k.props.user.address}),console.log(k.props.balance-9.99),k.setState({purchase:r.a.createElement("p",null,"Congrats on your purchase! You have 30 days to watch this movie")}),alert("Congrats on your purchase! You have 30 days to watch this movie.")):(k.setState({purchase:r.a.createElement("p",null,"You dont have the neccessary funds")}),alert("You dont have the neccessary funds or are not logged in"))}},"Rent the movie for $9.99"),this.state.purchase),r.a.createElement("div",{className:"post"},r.a.createElement(b,{bttonText:"Leave a review",filling:!1,userId:this.props.userId,reviewId:null,movieId:this.props.id,rating:"",desc:""})),r.a.createElement("div",{className:"multiples genre"},r.a.createElement("ul",null,r.a.createElement("li",{className:"column-head"},"GENRE "),l.genres.map((function(e){return r.a.createElement(E.b,{to:"/",onClick:function(){return k.props.getFilter(i.filter((function(t){return t.name===e.name}))[0].id,i.filter((function(t){return t.name===e.name}))[0].name)}},r.a.createElement("li",null,e.name))})))),r.a.createElement("div",{className:"multiples production"},r.a.createElement("ul",null," ",r.a.createElement("li",{className:"column-head"},"PRODUCED BY"),l.production_companies.map((function(e){return r.a.createElement("li",null,e.name)})))),r.a.createElement("div",{className:"multiples countries"},r.a.createElement("ul",null,r.a.createElement("li",{className:"column-head"},"PRODUCED IN"),l.production_countries.map((function(e){return r.a.createElement("li",null,e.name)}))))),r.a.createElement("h3",{className:"review"},"Reviews")),w=c.map((function(e){return r.a.createElement("div",{className:"comments",id:e.id},console.log(o.filter((function(t){return t.id===e.userId}))),r.a.createElement("div",null,r.a.createElement("p",null,o.filter((function(t){return t.id===e.userId}))[0].name),r.a.createElement("div",null,new Array(e.rating).fill(r.a.createElement("span",null,"\u2605"))),r.a.createElement("p",null,e.date.substring(0,16)),r.a.createElement("p",null,e.description)),o.filter((function(t){return t.id===e.userId}))[0].id===k.props.userId?r.a.createElement("div",null,r.a.createElement(b,{bttonText:"Edit your post",filling:!0,userId:k.props.userId,reviewId:e.id,movieId:k.props.id,rating:e.rating,desc:e.description}),r.a.createElement("button",{onClick:function(){k.deleteApi("reviews",e.id),document.getElementById(e.id).style.display="none"}},"Delete your post")):r.a.createElement("div",null))})),this.setState({movieHTML:g,reviewHTML:w}),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(0),console.log(e.t0);case 32:case"end":return e.stop()}}),e,this,[[0,29]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.callApi()}},{key:"postDatabase",value:function(){var e=Object(v.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/"+t,a);case 3:n=e.sent,console.log(n.data),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteApi",value:function(){var e=Object(v.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is running",a),e.prev=1,e.next=4,f.a.delete("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/"+t+"/"+a);case 4:n=e.sent,console.log(n.data),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"movie"},this.state.movieHTML,r.a.createElement("div",null,this.state.reviewHTML))}}]),a}(n.Component),k=a(3),y=(a(63),function(e){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"space"}),r.a.createElement(E.b,{to:"/Movie"},"Previously Viewed"),r.a.createElement(E.b,{to:"/Profile"},"Profile")," ",r.a.createElement("br",null),r.a.createElement(E.b,{to:"/"},"Home")," ",r.a.createElement("br",null))}),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchTerm:"",resultsHTML:"",movies:[]},n.makeSearch=n.makeSearch.bind(Object(i.a)(n)),n.takeTerm=n.takeTerm.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"callApi",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("4c97d52803b7ca7abda8da0f425b880b"));case 3:t=e.sent,console.log(t.data),console.log(this.props.filter),null!=this.props.filter&&(t.data.results=t.data.results.filter((function(e){return-1!=e.genre_ids.findIndex((function(e){return e===n.props.filter}))}))),a=t.data.results.map((function(e){return r.a.createElement(E.b,{to:"/Movie",onClick:function(){return n.props.capture(e.id)}},r.a.createElement("div",{style:{background:'url("https://image.tmdb.org/t/p/w200'.concat(e.poster_path,'") no-repeat')}},r.a.createElement("div",{className:"cell"},r.a.createElement("h5",null,e.release_date),r.a.createElement("p",null,e.overview))))})),this.setState({resultsHTML:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.callApi()}},{key:"postDatabase",value:function(){var e=Object(v.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v2/"+t,a);case 3:n=e.sent,console.log(n.data),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"makeSearch",value:function(e){e.preventDefault(),this.callApi()}},{key:"takeTerm",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"general"},r.a.createElement("h1",null,this.props.userName,", check out this awesome selection of movies"),r.a.createElement("div",{className:"filter"},""===this.props.filterName?r.a.createElement("p",null,"no filter"):r.a.createElement("p",null,"filtered by Genre: ",this.props.filterName," ",r.a.createElement(E.b,{to:"/",onClick:function(){e.props.getFilter(null,""),e.callApi()}},"Reset Filter"))),r.a.createElement("div",{className:"grid"},this.state.resultsHTML))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).signInHandler=function(e){e.preventDefault();var t=n.state.accounts.findIndex((function(e){return e.email===n.state.email&&e.password===n.state.password}));-1!=t?(console.log(n.state.accounts[t]),n.props.Allowed(n.state.accounts[t])):n.setState({error:r.a.createElement("div",null,"Sorry, no login was found")})},n.onChangeHandler=function(e){"userPassword"===e.target.name?n.setState({password:e.target.value}):"email"===e.target.name&&n.setState({email:e.target.value})},n.state={accounts:[],password:"",error:"",email:""},n.onChangeHandler=n.onChangeHandler.bind(Object(i.a)(n)),n.signInHandler=n.signInHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.callApi()}},{key:"callApi",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts");case 3:t=e.sent,this.setState({accounts:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",null,this.state.error,r.a.createElement("form",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"userPassword",placeholder:"Password",onChange:this.onChangeHandler}),r.a.createElement("button",{onClick:this.signInHandler},"Sign in")),r.a.createElement(E.b,{to:"/SignUp"},"Don't have an account? Sign up here")))}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createUserHandler=function(e){e.preventDefault();var t={email:n.state.email,password:n.state.password,address:n.state.address,name:n.state.name,balance:1e4};n.postApi(t),n.setState({message:r.a.createElement("p",null,"Congrats, your profile was created successfully ",r.a.createElement(E.b,{to:"/SignIn"},"Click here to Sign In"))})},n.onChangeHandler=function(e){"name"===e.target.name?n.setState({name:e.target.value}):"userPassword"===e.target.name?n.setState({password:e.target.value}):"email"===e.target.name?n.setState({email:e.target.value}):"address"===e.target.name&&n.setState({address:e.target.value})},n.state={accounts:[],name:"",password:"",error:"",email:"",address:""},n.onChangeHandler=n.onChangeHandler.bind(Object(i.a)(n)),n.createUserHandler=n.createUserHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"postApi",value:function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts",t);case 3:a=e.sent,console.log(a.data),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",null,this.state.message,r.a.createElement("form",null,r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"userPassword",placeholder:"Password",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"address",name:"address",placeholder:"address",onChange:this.onChangeHandler}),r.a.createElement("button",{onClick:this.createUserHandler},"Sign up")),r.a.createElement(E.b,{to:"/"},"Already have an account? Sign in here")))}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createUserHandler=function(e){e.preventDefault();var t={id:n.props.userId,email:n.state.email,password:n.state.password,address:n.state.address,name:n.state.name,balance:n.state.balance};n.postApi(t),n.setState((function(e){return{message:r.a.createElement("p",null,"Congrats, your profile was updated successfully."),isFillingOutForm:!e.isFillingOutForm}}))},n.onChangeHandler=function(e){"newname"===e.target.name?n.setState({name:e.target.value}):"newuserPassword"===e.target.name?n.setState({password:e.target.value}):"newemail"===e.target.name?n.setState({email:e.target.value}):"newaddress"===e.target.name?n.setState({address:e.target.value}):"newbalance"===e.target.name&&n.setState({balance:e.target.value})},n.state={isFillingOutForm:!1,movies:[],name:n.props.userName,password:n.props.userPassword,error:"",email:n.props.userEmail,address:n.props.userAddress,balance:n.props.userBalance,occured:!1,movieHTML:[""]},n.onChangeHandler=n.onChangeHandler.bind(Object(i.a)(n)),n.createUserHandler=n.createUserHandler.bind(Object(i.a)(n)),n.switchEdit=n.switchEdit.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.callApi(),this.callUserApi()}},{key:"componentDidUpdate",value:function(){this.state.occured||(document.getElementById("newname").value=this.state.name,document.getElementById("newuserPassword").value=this.state.password,document.getElementById("newemail").value=this.state.email,document.getElementById("newaddress").value=this.state.address,this.setState({occured:!0}))}},{key:"callApi",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,s=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/transactions");case 3:t=e.sent,a=t.data.filter((function(e){return e.userId===s.props.userId})),n=a.map((function(e){return r.a.createElement(E.b,{to:"/Movie",onClick:function(){return s.props.capture(e.movieId)}},r.a.createElement("img",{src:e.image}),r.a.createElement("p",null,e.price>10?"Bought":"Rented"," on ",e.date.substring(0,17)," for $",e.price))})),this.setState({movies:t.data,movieHTML:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"callUserApi",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts/"+this.props.userId);case 3:t=e.sent,a=t.data,console.log(t.data),this.setState({name:a.name,password:a.password,email:a.email,address:a.address,balance:a.balance,occured:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"postApi",value:function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts",t);case 3:a=e.sent,console.log(a.data),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"switchEdit",value:function(){this.setState((function(e){return{isFillingOutForm:!e.isFillingOutForm}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"spacing"},r.a.createElement("h3",null,this.props.userName,", view and edit your profile info here:"),r.a.createElement("div",{className:"spacing"},this.state.message,r.a.createElement("form",{className:"spacing profile"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",id:"newname",name:"newname",placeholder:"name",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",id:"newuserPassword",name:"newuserPassword",placeholder:"Password",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",id:"newemail",name:"newemail",placeholder:"email",onChange:this.onChangeHandler}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"address",id:"newaddress",name:"newaddress",placeholder:"address",onChange:this.onChangeHandler}),r.a.createElement("button",{onClick:this.createUserHandler},"Update")," ",r.a.createElement("br",null),r.a.createElement("label",null,"Balance: $",this.state.balance))),r.a.createElement("h4",null,"Here are the movies you have purchased"),r.a.createElement("div",{className:"spacing"},this.state.movieHTML))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={signedIn:!1,movieId:0,user:{},filter:null,filterName:""},n.signingIn=n.signingIn.bind(Object(i.a)(n)),n.chooseMovie=n.chooseMovie.bind(Object(i.a)(n)),n.genreFilter=n.genreFilter.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"signingIn",value:function(e){this.setState({signedIn:!0,user:e})}},{key:"chooseMovie",value:function(e){this.setState({movieId:e})}},{key:"genreFilter",value:function(e,t){this.setState({filter:e,filterName:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"alternative-grid"},this.state.signedIn?r.a.createElement(E.a,null,r.a.createElement("div",{className:"status"},"Logged in as ",this.state.user.name),r.a.createElement(y,{userName:this.state.user.name}),r.a.createElement(k.a,{exact:!0,strict:!0,path:"/",render:function(){return r.a.createElement(O,{getFilter:e.genreFilter,filter:e.state.filter,filterName:e.state.filterName,capture:e.chooseMovie,userName:e.state.user.name})}}),r.a.createElement(k.a,{path:"/SignIn",render:function(){return r.a.createElement(O,{getFilter:e.genreFilter,filter:e.state.filter,filterName:e.state.filterName,capture:e.chooseMovie,userName:e.state.user.name})}}),r.a.createElement(k.a,{path:"/Profile",render:function(){return r.a.createElement(S,{capture:e.chooseMovie,userId:e.state.user.id,userName:e.state.user.name,userEmail:e.state.user.email,userAddress:e.state.user.address,userPassword:e.state.user.password,userBalance:e.state.user.balance})}}),r.a.createElement(k.a,{path:"/Movie",render:function(){return r.a.createElement(w,{getFilter:e.genreFilter,id:e.state.movieId,userId:e.state.user.id,balance:e.state.user.balance,user:e.state.user})}}),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Information provided by TheMoviedb \xa9 2020 Walter Rada"))):r.a.createElement(E.a,null,r.a.createElement("div",{className:"status"},r.a.createElement(E.b,{to:"/SignIn"},"Sign in")," or ",r.a.createElement(E.b,{to:"/SignUp"},"Sign up")),r.a.createElement(y,{userName:"Guest"}),r.a.createElement(k.a,{exact:!0,strict:!0,path:"/",render:function(){return r.a.createElement(O,{getFilter:e.genreFilter,filter:e.state.filter,filterName:e.state.filterName,capture:e.chooseMovie,userName:"Guest"})}}),r.a.createElement(k.a,{path:"/Profile",render:function(){return r.a.createElement("div",{className:"spacing"},r.a.createElement("h1",null,"Please create an account and log in."))}}),r.a.createElement(k.a,{path:"/Movie",render:function(){return r.a.createElement(w,{getFilter:e.genreFilter,id:e.state.movieId,userId:0,balance:0,user:e.state.user})}}),r.a.createElement(k.a,{exact:!0,strict:!0,path:"/SignIn",render:function(){return r.a.createElement(C,{Allowed:e.signingIn})}}),r.a.createElement(k.a,{path:"/SignUp",render:function(){return r.a.createElement(I,null)}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.06237906.chunk.js.map