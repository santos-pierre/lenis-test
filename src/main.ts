import Lenis from "@studio-freight/lenis";
import "./style.css";

const lenis = new Lenis({

});

lenis.on('scroll', (e: any) => {
	console.log(e);
});

const raf = (time: any) =>  {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
