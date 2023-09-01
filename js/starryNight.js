// Twinkling Night Sky by Sharna

class StarrySky extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        num: 60,
        vw: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        vh: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )
      };
    }
  
    starryNight() {
      anime({
        targets: "#sky .star",
        opacity: [
          { duration: 700, value: "0" },
          { duration: 700, value: "1" }
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i
      });
    }
  
    shootingStars() {
      anime({
        targets: "#shootingstars .wish",
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [{ duration: 700, value: "1" }],
        width: [
          { value: "150px" },
          { value: "0px" }
        ],
        translateX: 350
      });
    }
  
    randomRadius() {
      return Math.random() * 0.7 + 0.6;
    }
  
    getRandomX() {
      return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
    }
  
    getRandomY() {
      return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
    }
  
    componentDidMount() {
      this.starryNight();
      this.shootingStars();
    }
  
    render() {
      const { num } = this.state;
  
      const starCircles = [...Array(num)].map((_, y) => (
        React.createElement("circle", {
          cx: this.getRandomX(),
          cy: this.getRandomY(),
          r: this.randomRadius(),
          stroke: "none",
          strokeWidth: "0",
          fill: "white",
          key: y,
          className: "star"
        })
      ));
  
      const shootingStarDivs = [...Array(60)].map((_, y) => (
        React.createElement("div", {
          key: y,
          className: "wish",
          style: {
            left: `${this.getRandomY()}px`,
            top: `${this.getRandomX()}px`
          }
        })
      ));
  
      return (
        React.createElement("div", { id: "App" },
          React.createElement("svg", { id: "sky" }, starCircles),
          React.createElement("div", { id: "shootingstars" }, shootingStarDivs)
        )
      );
    }
  }
  
  ReactDOM.render(
    React.createElement(StarrySky, null),
    document.getElementById("root")
  );

//   function mail() {
//     var rk =
//     document.getElementById("button").getAttribute("onClick");
//     document.getElementById("gfg").innerHTML = rk;
// }
$(document).ready(function(){
  $('#sendEmailButton').on('click',function(){
    let name = document.getElementById("emailSenderName").value;
    let subject = document.getElementById("emailSubject").value;
    let body = document.getElementById("emailBody").value;
     window.location.href = `mailto:nicolafolchig@gmail.com?subject=${subject} - ${name}&body=${body}`; 
  });
});