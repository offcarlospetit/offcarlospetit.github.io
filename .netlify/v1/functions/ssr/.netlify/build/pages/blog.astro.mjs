/* empty css                                 */
import { a as createComponent, r as renderComponent, b as renderHead, g as renderTemplate } from '../chunks/astro/server_Mz-ejFHJ.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, d as $$Footer } from '../chunks/FormattedDate_BVBnW41H.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DtsrwfYD.mjs';
import { g as getCollection } from '../chunks/_astro_content_jrKZphon.mjs';
import { $ as $$WhatIDo } from '../chunks/WhatIDo_CU0maKdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto md:px-10 py-20"> ${renderComponent($$result, "WhatIDo", $$WhatIDo, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/carlospetit/Documents/Develop/portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/carlospetit/Documents/Develop/portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
