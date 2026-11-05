/** Clave de `localStorage` para la preferencia de tema. */
export const THEME_STORAGE_KEY = "shaila-theme";

export type Theme = "dark" | "light";

/**
 * Se ejecuta de forma síncrona en `<head>`, antes del primer pintado.
 *
 * - Si hay `"light"` guardado, aplica el tema claro antes de que se vea
 *   el contenido.
 * - Si no hay preferencia (o el almacenamiento falla), deja el tema
 *   oscuro, que es el valor por defecto.
 *
 * El contenido es constante: nunca se interpola información del usuario.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=window.localStorage.getItem("${THEME_STORAGE_KEY}");document.documentElement.dataset.theme=t==="light"?"light":"dark";}catch(e){document.documentElement.dataset.theme="dark";}})();`;
