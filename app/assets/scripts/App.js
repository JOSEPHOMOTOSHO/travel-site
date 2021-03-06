import "../styles/style.css"
import "lazysizes"
import MobileMenu from "./modules/MobileMenu.js"
import RevealOnScroll from "./modules/RevealOnScroll.js"
import StickyHeader from "./modules/stickyHeader.js"




new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
let modal

 document.querySelectorAll(".open-modal").forEach(el =>{
    el.addEventListener("click",e => {
        e.preventDefault();
        if(typeof modal == "undefined"){
            import(/*webpackChunkName: "modal"*/"./modules/Modal").then((x) => {
                modal = new x.default()
                setTimeout(() => modal.open(),20)
             }).catch(() => console.log("there was a problem") )
        }else{
            modal.open()
        }
    })
 } )




if(module.hot){
    module.hot.accept()
}





