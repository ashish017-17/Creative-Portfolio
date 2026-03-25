function revealToSpan(){
   document.querySelectorAll(".reveal")
   .forEach(function(elem){
   //create two spans
   let parent = document.createElement("span");
   let child = document.createElement("span");
   
   //parent and child both sets their respective classes
   parent.classList.add("parent");
   child.classList.add("child");

   //span parents gets child and child gets elem details
   child.innerHTML = elem.innerHTML;
   parent.appendChild(child);

   //elem replaces its value with parent span
   elem.innerHTML = "";
   elem.appendChild(parent);


});

}

revealToSpan();

let tl = gsap.timeline();
tl
   .from(".child span",{
      x: 100,
      stagger: .2,
      duration: 1.4,
      ease: Circ.easeInOut
   })
   .to(".parent .child",{
      y: "-100%",
      duration:1,
      ease: Circ.easeInOut
   })
   .to("#loader",{
      height: 0,
      duration:1,
      ease: Circ.easeInOut
   })
   .to("#green",{
      height: "100%",
      top:0,
      duration:1,
      delay: -.5,
      ease: Circ.easeInOut
   })
   .to("#green",{
      height: "0%",
      duration:1,
      delay: -.25,
      ease: Circ.easeInOut
   })