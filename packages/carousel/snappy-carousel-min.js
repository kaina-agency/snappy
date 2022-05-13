export default(()=>{switch(!!customElements.get("snappy-carousel")){case!0:break;case!1:class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='<style>:host{display: block;}.c{display: flex;flex-direction: column;justify-content: var(--arrow-alignment, flex-end);position: relative;}.c__track{display: flex;overflow-x: scroll;scroll-behavior: smooth;margin: 0 calc(-1 * var(--gap, 0));-ms-overflow-style: none;scrollbar-width: none;}.c__track::-webkit-scrollbar{display: none;}.c__track::slotted(*){flex-shrink: 0;scroll-snap-align: start;width: var(--mobile, 100%);padding: 0 var(--gap, 0);box-sizing: border-box;}@media (min-width: 768px){.c__track::slotted(*){width: var(--tablet, 50%);}}@media (min-width: 1024px){.c__track::slotted(*){width: var(--desktop, 33.33%);}}.c > button{position: absolute;height: var(--arrow-size, 48px);width: var(--arrow-size, 48px);display: flex;align-items: center;justify-content: center;}.c > button, .c__indicators > button{color: inherit;background: none;border: none;cursor: pointer;}.c > button svg,.c__indicators svg,[name=prev-icon]::slotted(svg),[name=next-icon]::slotted(svg){display: block;height: var(--arrow-size, 48px);width: var(--arrow-size, 48px);fill: var(--icon-color, currentcolor);}.c__next{right: 0;}.c__indicators{left: 0;width: 100%;height: var(--arrow-size, 48px);display: flex;justify-content: center;}.c__indicators button{height: var(--arrow-size, 48px);}.c__indicators svg{height: var(--indicator-size, 16px);width: var(--indicator-size, 16px);}.c__announcer{position: absolute;height: 1px;width: 1px;clip: rect(0 0 0 0);overflow: hidden;}</style><div class="c" part="carousel"><slot class="c__track" part="track" role="list"></slot><div class="c__indicators" part="indicators"></div><button class="c__prev" part="prev" aria-label="Go to previous slide"><slot name="prev-icon"><svg viewbox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg></slot></button><button class="c__next" part="next" aria-label="Go to next slide"><slot name="next-icon"><svg viewbox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg></slot></button><div style="display: none;"><slot name="indicator-icon" class="c__i"><svg viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg></slot><slot name="indicator-icon-active" class="c__i__active"><svg viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/></svg></slot></div><div class="c__announcer" aria-live="polite" aria-atomic="true"></div></div>'}connectedCallback(){const e=this.shadowRoot,t=e.querySelector(".c__track"),s=e.querySelector(".c__prev"),i=e.querySelector(".c__next"),o=e.querySelector(".c__indicators"),r=e.querySelector(".c__announcer"),l=e.querySelector(".c__i").assignedElements()[0],n=e.querySelector(".c__i__active").assignedElements()[0],a=e.querySelector(".c__i svg"),c=e.querySelector(".c__i__active svg"),d=(l||a).outerHTML,h=(n||c).outerHTML;this.prev=()=>{0===t.scrollLeft?t.scrollLeft=t.scrollWidth:t.scrollLeft-=this.slides[0].offsetWidth},s.addEventListener("click",this.prev),this.next=()=>{t.scrollLeft+t.offsetWidth+2>t.scrollWidth?t.scrollLeft=0:t.scrollLeft+=this.slides[0].offsetWidth},i.addEventListener("click",this.next),this.goToSlide=e=>{t.scrollLeft=this.slides[e].offsetLeft},this.toggleControls=()=>{const e=t.scrollWidth===t.offsetWidth?"none":"";s.style.display=e,i.style.display=e,o.style.display=e};const v=()=>{const e=this.slides.filter((e=>"false"===e.ariaHidden)),t=+e[0].dataset.slideIndex+1;let s=+e[e.length-1].dataset.slideIndex+1;s=s===t?"":"-"+s;const i=`Showing slide ${t}${s} of ${this.slides.length}`;r.innerText!==i&&(r.innerText=i)},p=(e,t)=>{let s;return function(){clearTimeout(s);let i=Array.prototype.slice.call(arguments);i.unshift(this),s=setTimeout(e.bind.apply(e,i),t)}};new ResizeObserver(p((e=>{e.forEach(this.toggleControls)}),500)).observe(t),t.addEventListener("scroll",p(v,500)),this.init=()=>{t.style.scrollSnapType="",o.innerHTML="",this.slides=t.assignedElements();const e=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target,{slideIndex:s}=t.dataset,i=o.children[s],r=e.isIntersecting;t.ariaHidden=!r,i&&(i.innerHTML=r?h:d),t.dispatchEvent(new Event(r?"visible":"hidden"))}))}),{root:t,threshold:.5});this.slides.forEach(((s,i)=>{s.dataset.slideIndex=i,s.setAttribute("role","list-item");const r=document.createElement("button");r.ariaLabel="Go to slide "+(i+1),o.appendChild(r),r.addEventListener("click",(()=>{t.scrollLeft=s.offsetLeft})),e.observe(s)})),setTimeout((()=>{t.style.scrollSnapType="x mandatory",this.toggleControls(),v()}),1e3)},this.init(),t.addEventListener("slotchange",this.init)}}customElements.define("snappy-carousel",e)}})();