!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=t.startBtn,o=t.stopBtn,r=t.body;e.addEventListener("click",(function(){n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.setAttribute("disabled","true")})),o.addEventListener("click",(function(){clearInterval(n),r.style.backgroundColor="",e.removeAttribute("disabled","false"),o.removeAttribute("disabled","false")}));var n=null}();
//# sourceMappingURL=01-color-switcher.e3245e4f.js.map
