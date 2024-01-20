'use client'
import { InView, useInView } from "react-intersection-observer";
function FooterIntersection() {
let options = {
    threshold:0.1,
    rootMargin: '0px',    
}  
const { ref: footerRef, inView, entry } = useInView(options); 
if(inView){    
    if(document && document.getElementById('main-footer')){
        document.getElementById('main-footer').classList.add('footer-bottom-up')       
    }
}else{
    if(document && document.getElementById('main-footer')){
        document.getElementById('main-footer').classList.remove('footer-bottom-up')
    }
}
  return (
    <>
        <div ref={footerRef}></div>
    </>
  )
}

export default FooterIntersection