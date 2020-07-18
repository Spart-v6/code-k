var s = document.getElementById('loading').style;
s.opacity = 1;
(function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();

// document.getElementById('loading').style.display= 'none';
// function fadeOutEffect() {
//     var fadeTarget = document.getElementById("loading");
//     var fadeEffect = setInterval(function () {
//         if (!fadeTarget.style.opacity) {
//             fadeTarget.style.opacity = 1;
//         }
//         if (fadeTarget.style.opacity > 0) {
//             fadeTarget.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeEffect);
//         }
//     }, 200);
// } 
// setInterval(() => {
//     fadeOutEffect
// }, 1000);