!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timerId=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.1dca9685.js.map