(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{40:function(e,a,t){e.exports=t(70)},45:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),o=t.n(i),l=(t(45),t(14)),c=t(15),s=t(17),m=t(16),u=t(18),g=t(39),h=t(81),v=t(73),E=t(74),p=t(75),d=t(76),w=t(77),f=t(82),b=t(78),y=t(79),k=t(80),O=null,j=null,x=null,N=0;function q(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var n=Object(g.a)(a[t],3),r=n[0],i=n[1],o=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[o])return O=r,j=i,x=o,e[r]}return null}var C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).buttonClick=function(){t.props.func()},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("style",{type:"text/css"},"\n      .btn-flat {\n        background-color: purple;\n        color: white;\n        font-size: 45px;\n        padding: 0;\n        height: 120px;\n        width: 120px;\n        border: 1px solid #999;\n        font-weight: bold;\n        line-height: 34px;\n      }\n      "),r.a.createElement(h.a,{key:"top",placement:"top",overlay:r.a.createElement(v.a,{id:"tooltip-top"},"Tap to make a move...")},r.a.createElement(E.a,{variant:"flat",className:"square",onClick:this.buttonClick},this.props.value)))}}]),a}(r.a.Component),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).buttonClick=function(){t.props.func()},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("style",{type:"text/css"},"\n      .btn-flatwin {\n        background-color: green;\n        color: white;\n        font-size: 45px;\n        padding: 0;\n        height: 120px;\n        width: 120px;\n        border: 1px solid #999;\n        font-weight: bold;\n        line-height: 34px;\n      }\n      "),r.a.createElement(h.a,{key:"top",placement:"top",overlay:r.a.createElement(v.a,{id:"tooltip-top"},"Tap to make a move...")},r.a.createElement(E.a,{variant:"flatwin",className:"square",onClick:this.buttonClick},this.props.value)))}}]),a}(r.a.Component),T=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"renderSquare",value:function(e){var a=this;return e===O||e===j||e===x?r.a.createElement(S,{value:this.props.squares[e],func:function(){return a.props.handleClick(e)}}):r.a.createElement(C,{value:this.props.squares[e],func:function(){return a.props.handleClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),I=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{animation:"grow",variant:"primary"}),r.a.createElement(p.a,{animation:"grow",variant:"secondary"}),r.a.createElement(p.a,{animation:"grow",variant:"success"}),r.a.createElement(p.a,{animation:"grow",variant:"danger"}),r.a.createElement(p.a,{animation:"grow",variant:"warning"}),r.a.createElement(p.a,{animation:"grow",variant:"info"}),r.a.createElement(p.a,{animation:"grow",variant:"light"}),r.a.createElement(p.a,{animation:"grow",variant:"dark"}),r.a.createElement(p.a,{animation:"grow",variant:"secondary"}),r.a.createElement(p.a,{animation:"grow",variant:"success"}),r.a.createElement(p.a,{animation:"grow",variant:"danger"}),r.a.createElement(p.a,{animation:"grow",variant:"warning"}),r.a.createElement(p.a,{animation:"grow",variant:"info"}),r.a.createElement(p.a,{animation:"grow",variant:"light"}),r.a.createElement(p.a,{animation:"grow",variant:"dark"}),r.a.createElement(p.a,{animation:"grow",variant:"secondary"}),r.a.createElement(p.a,{animation:"grow",variant:"success"}),r.a.createElement(p.a,{animation:"grow",variant:"danger"}),r.a.createElement(p.a,{animation:"grow",variant:"warning"}),r.a.createElement(p.a,{animation:"grow",variant:"info"}),r.a.createElement(p.a,{animation:"grow",variant:"light"}),r.a.createElement(p.a,{animation:"grow",variant:"dark"}),r.a.createElement(p.a,{animation:"grow",variant:"secondary"}),r.a.createElement(p.a,{animation:"grow",variant:"success"}),r.a.createElement(p.a,{animation:"grow",variant:"danger"}),r.a.createElement(p.a,{animation:"grow",variant:"warning"}),r.a.createElement(p.a,{animation:"grow",variant:"info"}),r.a.createElement(p.a,{animation:"grow",variant:"light"}),r.a.createElement(p.a,{animation:"grow",variant:"dark"}),r.a.createElement(p.a,{animation:"grow",variant:"secondary"}),r.a.createElement(p.a,{animation:"grow",variant:"success"}),r.a.createElement(p.a,{animation:"grow",variant:"danger"}),r.a.createElement(p.a,{animation:"grow",variant:"warning"}),r.a.createElement(p.a,{animation:"grow",variant:"info"}))}}]),a}(r.a.Component),A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).changeValue=function(e){var a=t.state.history.slice(0,t.state.stepNumber+1),n=a[a.length-1].squares.slice(),r=t.state.stepNumber;q(n)||n[e]||9===r||(n[e]=t.state.xIsNext?"X":"O",t.setState({history:a.concat([{squares:n}]),stepNumber:a.length,xIsNext:!t.state.xIsNext}))},t.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,a=this,t=this.state.history,n=t[this.state.stepNumber],i=q(n.squares),o=this.state.stepNumber,l=t.map((function(e,t){var n=t?"Go to move #"+t:"Go to game start";return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:t},r.a.createElement(E.a,{variant:"info",onClick:function(){return a.jumpTo(t)}},n)))}));return i?(e="Winner: "+i,N=1,console.log(N),console.log(O),console.log(j),console.log(x),alert("\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89 Congratulations... "+e+" \ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89")):e="Next player: "+(this.state.xIsNext?"X":"O"),9!==o||i||(e="Match Tied!",alert("Match Tied!")),r.a.createElement("div",{className:"game"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(w.a,null,r.a.createElement(I,null),r.a.createElement("center",null,r.a.createElement("h1",null,"Tic Tac Toe - Awesome Childhood Game")),r.a.createElement(I,null))),r.a.createElement(f.a,{animated:!0,now:100*o/9,variant:"warning"}),r.a.createElement("br",null),r.a.createElement(w.a,null,r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"game-board"},r.a.createElement(T,{squares:n.squares,handleClick:function(e){return a.changeValue(e)},isOver:N}))),r.a.createElement(y.a,null,r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,r.a.createElement(k.a,{variant:i?"success":9===o?"danger":"primary"},r.a.createElement("h2",null,e))),r.a.createElement("ol",null,l))))),r.a.createElement("br",null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(68);o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.5763be76.chunk.js.map