/* empty css                                 */
import { a as createComponent, r as renderComponent, g as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Mz-ejFHJ.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_BSxnmeJg.mjs';
export { renderers } from '../renderers.mjs';

const $$DeleteAccount = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Eliminaci\xF3n de Cuenta - Estimator App";
  const pageDescription = "Instrucciones para solicitar la eliminaci\xF3n de tu cuenta y datos asociados de la aplicaci\xF3n Estimator.";
  const pageTags = ["legal", "account", "deletion", "estimator"];
  const pageIcon = "beach";
  const publicationDate = /* @__PURE__ */ new Date("2025-05-05");
  const appName = "Estimator";
  const contactEmail = "ca.alberto.p@gmail.com";
  const processingTime = "7-14 d\xEDas h\xE1biles";
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": pageTitle, "description": pageDescription, "pubDate": publicationDate, "tags": pageTags, "icon": pageIcon, "heroImage": "/src/assets/fran.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="font-family: Arial, sans-serif; line-height: 1.6;">   <section style="margin-top: 20px;"> <p style="margin-bottom: 1.5em;">
Esta página proporciona las instrucciones para solicitar la eliminación
        de tu cuenta y los datos asociados de la aplicación móvil ${appName}.
</p> <h2>Cómo Solicitar la Eliminación</h2> <p style="margin-bottom: 1em;">
Para iniciar el proceso de eliminación de tu cuenta, por favor sigue
        estos pasos:
</p> <ol style="list-style: decimal; margin-left: 20px; margin-bottom: 1.5em;"> <li style="margin-bottom: 0.5em;"> <strong>Envía un Correo Electrónico:</strong> Redacta un nuevo correo electrónico
          dirigido a nuestra dirección de contacto: <strong><a${addAttribute(`mailto:${contactEmail}?subject=Solicitud%20Eliminaci%C3%B3n%20Cuenta%20Estimator`, "href")}>${contactEmail}</a></strong>.
</li> <li style="margin-bottom: 0.5em;"> <strong>Asunto del Correo:</strong> Asegúrate de que el asunto del correo
          sea: <code>Solicitud Eliminación Cuenta Estimator</code>. Esto nos
          ayuda a procesar tu solicitud más rápidamente.
</li> <li style="margin-bottom: 0.5em;"> <strong>Contenido del Correo:</strong> En el cuerpo del mensaje, por favor
          indica claramente la **dirección de correo electrónico asociada a la cuenta
          de ${appName} que deseas eliminar**. No es necesario que incluyas tu contraseña
          u otra información sensible.
</li> </ol> <h2>Proceso y Datos Afectados</h2> <p style="margin-bottom: 1em;">
Una vez recibida tu solicitud, podríamos contactarte a la dirección de
        correo proporcionada para verificar tu identidad y confirmar la
        solicitud de eliminación.
</p> <p style="margin-bottom: 1em;">
Tras la verificación, procederemos a eliminar permanentemente los
        siguientes datos asociados a tu cuenta de nuestros sistemas activos:
</p> <ul style="list-style: disc; margin-left: 20px; margin-bottom: 1.5em;"> <li>
Tu cuenta de usuario (Email, UID y credenciales de acceso en Firebase
          Authentication).
</li> <li>
Tu historial de participación en encuestas (datos en
          /userParticipation).
</li> <li>
Las encuestas que hayas creado (datos en /polls asociados a tu UID).
</li> <li>
Tus votos individuales emitidos (datos en /polls/${"{pollId}"}/votes/${"{userId}"}).
</li> </ul> <h2>Plazo de Procesamiento</h2> <p style="margin-bottom: 1.5em;">
Nos esforzamos por procesar las solicitudes de eliminación verificadas
        en un plazo aproximado de ${processingTime}. Te notificaremos una vez que
        el proceso se haya completado.
</p> <h2>Contacto</h2> <p style="margin-bottom: 1em;">
Si tienes alguna pregunta sobre el proceso de eliminación de cuenta, no
        dudes en contactarnos en:
</p> <p style="font-weight: bold;"> <a${addAttribute(`mailto:${contactEmail}`, "href")}>${contactEmail}</a> </p> </section> </div> ` })}`;
}, "/Users/carlospetit/Documents/Develop/portfolio/src/pages/delete-account.astro", void 0);

const $$file = "/Users/carlospetit/Documents/Develop/portfolio/src/pages/delete-account.astro";
const $$url = "/delete-account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DeleteAccount,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
