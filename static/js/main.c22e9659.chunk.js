(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),o=n.n(i),l=n(67),s=n(68),c=n(75),u=n(69),m=n(76),d=n(70),p=n.n(d),f=n(74),g={"small exploder":[[6,7],[7,6],[7,7],[7,8],[8,6],[8,8],[9,7]],exploder:[[5,5],[5,7],[5,9],[6,5],[6,9],[7,5],[7,9],[8,5],[8,9],[9,5],[9,7],[9,9]],"nine cell row":[[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11]],tumbler:[[4,5],[4,6],[4,8],[4,9],[5,5],[5,6],[5,8],[5,9],[6,6],[6,8],[7,4],[7,6],[7,8],[7,10],[8,4],[8,6],[8,8],[8,10],[9,4],[9,5],[9,9],[9,10]]},h=(n(145),n(147),n(27)),v=n(28),E=n(29);h.b.add(E.a,E.c,E.b,E.d);var C=15,b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={grid:[],isRunning:!1,iterationCount:0,sliderValue:-550,refreshRate:550},n.makeEmptyGrid=function(){return Array(C).fill(null).map(function(e){return Array(C).fill(!1)})},n.startSimulation=function(e){e.preventDefault(),n.state.isRunning||n.setState({isRunning:!0},function(){return n.simulationLoop()})},n.stopSimulation=function(e){e.preventDefault(),n.state.isRunning&&(clearTimeout(n.timeout),n.setState({isRunning:!1}))},n.simulationLoop=function(){n.createNextIteration(),n.timeout=setTimeout(function(){n.simulationLoop()},n.state.refreshRate)},n.advanceOneIteration=function(e){e.preventDefault(),n.state.isRunning||0===n.state.iterationCount||n.createNextIteration()},n.createNextIteration=function(){for(var e=n.state.grid.map(function(e){return e.slice()}),t=0;t<e.length;t++)for(var a=0;a<e[t].length;a++){var r=n.countNeighbors(t,a);e[t][a]&&(r<2||r>3)?e[t][a]=!1:3===r&&(e[t][a]=!0)}n.setState({grid:e,iterationCount:n.state.iterationCount+1})},n.isWithinGrid=function(e,t){return e>=0&&e<=C-1&&t>=0&&t<=C-1},n.findNeighbors=function(e,t){return[[e-1,t-1],[e-1,t],[e-1,t+1],[e,t-1],[e,t+1],[e+1,t-1],[e+1,t],[e+1,t+1]]},n.countNeighbors=function(e,t){for(var a=n.findNeighbors(e,t),r=0,i=0;i<a.length;i++)if(n.isWithinGrid(a[i][0],a[i][1])){var o=a[i];n.state.grid[o[0]][o[1]]&&(r+=1)}return r},n.toggleCell=function(e,t){var a=n.state.grid;a[e][t]=!a[e][t],n.setState({grid:a})},n.resetGrid=function(e){e.preventDefault(),clearTimeout(n.timeout),n.setState({grid:n.makeEmptyGrid(),isRunning:!1,iterationCount:0,sliderValue:-550,refreshRate:550})},n.onSliderChange=function(e){n.setState({sliderValue:e})},n.onAfterChange=function(e){n.setState({refreshRate:-1*e})},n.loadPreset=function(e){clearTimeout(n.timeout);var t=n.makeEmptyGrid();g[e].forEach(function(e){t[e[0]][e[1]]=!0}),n.setState({grid:t,isRunning:!1,iterationCount:0})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({grid:this.makeEmptyGrid()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"CGOL"),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"?")),r.a.createElement("div",{className:"grid-controls-presets-container"},r.a.createElement("div",{className:"grid-slider-iteration-count-container"},r.a.createElement("div",{className:"grid-container"},this.state.grid.map(function(t,n){return r.a.createElement("div",{key:n,className:"row"},t.map(function(t,a){return r.a.createElement("div",{key:a,className:t?"living-cell":"dead-cell",onClick:e.state.isRunning?null:function(){return e.toggleCell(n,a)}},t)}))}))),r.a.createElement("div",{className:"panel-container"},r.a.createElement("div",{className:"controls-container"},r.a.createElement("div",{className:"controls-top-row"},r.a.createElement("div",{className:"control-wrapper",onClick:this.startSimulation},r.a.createElement(v.a,{icon:"play",size:"2x"})),r.a.createElement("div",{className:"control-wrapper",onClick:this.stopSimulation},r.a.createElement(v.a,{icon:"stop",size:"2x"})),r.a.createElement("div",{className:"preset-wrapper",onClick:function(){return e.loadPreset("small exploder")}},"1"),r.a.createElement("div",{className:"preset-wrapper",onClick:function(){return e.loadPreset("exploder")}},"2")),r.a.createElement("div",{className:"controls-bottom-row"},r.a.createElement("div",{className:"control-wrapper",onClick:this.advanceOneIteration},r.a.createElement(v.a,{icon:"step-forward",size:"2x"})),r.a.createElement("div",{className:"control-wrapper",onClick:this.resetGrid},r.a.createElement(v.a,{icon:"times",size:"2x"})),r.a.createElement("div",{className:"preset-wrapper",onClick:function(){return e.loadPreset("nine cell row")}},"3"),r.a.createElement("div",{className:"preset-wrapper",onClick:function(){return e.loadPreset("tumbler")}},"4"))),r.a.createElement("div",{className:"slider-container"},r.a.createElement(f.a,{min:-1e3,max:-100,value:this.state.sliderValue,onChange:this.onSliderChange,onAfterChange:this.onAfterChange,trackStyle:{backgroundColor:"blue",borderRadius:0,height:5},handleStyle:{border:"2px solid black",borderColor:"black",outline:"none",boxShadow:"none",height:20,width:20,marginLeft:-14,marginTop:-9,backgroundColor:"white"},railStyle:{backgroundColor:"gray",borderRadius:0,height:5}})),r.a.createElement("div",{className:"iteration-count"},this.state.iterationCount))))}}]),t}(r.a.Component),k=p()(b);o.a.render(r.a.createElement(k,null),document.getElementById("root"))},77:function(e,t,n){e.exports=n(149)}},[[77,2,1]]]);
//# sourceMappingURL=main.c22e9659.chunk.js.map