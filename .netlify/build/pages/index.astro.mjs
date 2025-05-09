/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, r as renderComponent, g as renderTemplate, b as renderHead } from '../chunks/astro/server_Mz-ejFHJ.mjs';
import 'kleur/colors';
import { c as $$Icon, $ as $$BaseHead, a as $$Header, d as $$Footer } from '../chunks/FormattedDate_CdPfgdZ3.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DtsrwfYD.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DErYiWue.mjs';
import { $ as $$WhatIDo } from '../chunks/WhatIDo_DdjDM_-Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const images = /* #__PURE__ */ Object.assign({"/src/assets/adriana.jpg": () => import('../chunks/adriana_CO0JWqaf.mjs'),"/src/assets/euro.jpg": () => import('../chunks/euro_D0tLcU5B.mjs'),"/src/assets/fran.jpg": () => import('../chunks/fran_BE5DNVC_.mjs'),"/src/assets/hero.png": () => import('../chunks/hero_DLvpu_MT.mjs')

});
  return renderTemplate`${maybeRenderHead()}<section class="py-20 flex md:flex-row flex-col px-4 md:px-0 gap-10 md:gap-0"> <div class="flex flex-col gap-6 justify-start items-start md:w-1/2"> <h1 class="text-pblack">Hi, my name is Carlos Petit</h1> <p class="text-6xl font-bold">Duels with the sun are fewer.</p> <p>
I am Carlos Petit y Bastida, a Spanish painter. A prolific artist, I
      left behind more than 2,200 cataloged works.
</p> <a rel="noopener noreferrer" href="https://jramma.com" target="_blank" class="bg-pgreen px-5 py-3 border-1 border-black rounded-lg shadow-card hover:shadow-hover transition">
Work together
</a> </div> <div class="md:w-1/2 object-contain flex items-center justify-center p-10 group"> <a rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Sorolla" target="_blank"> <div class="bg-pblue border-3 border-black rounded-2xl h-52 w-60 shadow-card group-hover:shadow-hover flex transition relative"> <div class="absolute -top-8 -left-12 text-5xl bg-ppink px-5 py-1 z-10 shadow-card group-hover:shadow-hover transition rounded-t-2xl border-3 border-black rounded-bl-2xl rounded-br-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "paint" })} </div> <div class="absolute top-16 -right-16 text-5xl bg-pyellow p-2 z-10 shadow-card group-hover:shadow-hover transition rounded-full border-3 border-black"> ${renderComponent($$result, "Icon", $$Icon, { "name": "beach" })} </div> <div class="absolute text-nowrap flex items-center gap-4 -bottom-12 right-0 pr-4 bg-pgreen pl-1 z-10 shadow-card1 group-hover:shadow-card transition rounded-full border-3 border-black"> ${renderComponent($$result, "Icon", $$Icon, { "name": "beach" })} <p>Carlos Petit</p> </div> <div class="h-80 w-60 overflow-hidden relative -mt-30 rounded-2xl"> ${renderComponent($$result, "Image", $$Image, { "class": "object-bottom absolute bottom-0 group-hover:scale-105 transition", "src": images["/src/assets/hero.png"](), "alt": "Sorolla, photo wiki" })} </div> </div></a> </div> </section>`;
}, "/Users/carlospetit/Documents/Develop/portfolio/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="p-0 m-0 max-w-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto md:px-10"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "WhatIDo", $$WhatIDo, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/carlospetit/Documents/Develop/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/carlospetit/Documents/Develop/portfolio/src/pages/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
