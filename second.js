
document.onmousemove = animatedCircles;

        const colors = ['#00CED1', '#8B008B', '#1E90FF'];

        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';

            let color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = 'all 0.5s linear 0s';

            circle.style.left = circle.offsetLeft - 20 + 'px';
            circle.style.top = circle.offsetTop - 20 + 'px';

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '5px';
            circle.style.opacity = 0;
        }

 function showOrHideDiv() {
      var v = document.getElementById("showOrHide");
      if (v.style.display === "none") {
         v.style.display = "block";
      } else {
         v.style.display = "none";
      }
   }