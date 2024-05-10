/**
 * Returns a string of an HTML `<p>` element using the given `innerHTML` and 
 * `id` arguments.
 *
 * @param {string} innerHTML
 * @param {string} id
 * @returns {string}
 * ```jsx
 * <p id={id}>{innerHTML}</p>
 * ```
 */
const p = (innerHTML, id) => `<p id="${id}">${innerHTML}</p>`;


/**
 * Returns a string of an HTML `<a>` element using the given `href`, 
 * `innerHTML`, and optional `target` arguments.
 * 
 * When clicked, this `<a>` element will wait 0.1 seconds, then reload the 
 * page. This is to better work with a single page and load different content.
 *
 * @param {string} href
 * @param {string} innerHTML
 * @param {string} target Default: "_self"
 * @returns {string}
 * ```jsx
 * <a onclick="window.setTimeout(() => {window.location.reload();}, 100);" href={href} target={target}>{innerHTML}</a>
 * ```
 */
const a = (href, innerHTML, target = "_self") => `<a onclick="window.setTimeout(() => {window.location.reload();}, 100);" href="${href}" target="${target}">${innerHTML}</a>`;

/**
 * Returns a string of an HTML `<li>` element using the given `innerHTML` and 
 * `id` arguments.
 *
 * @param {string} innerHTML
 * @param {string} id
 * @returns {string}
 * ```jsx
 * <li id={id}>{innerHTML}</li>
 * ```
 */
const li = (id, innerHTML) => `<li id="${id}">${innerHTML}</li>`;

/**
 * Returns a string of an HTML `<ul>` element using the given `innerHTML` and 
 * `id` arguments.
 *
 * @param {string} innerHTML
 * @param {string} id
 * @returns {string}
 * ```jsx
 * <ul id={id}>{innerHTML}</ul>
 * ```
 */
const ul = (id, innerHTML) => `<ul id="${id}">${innerHTML}</ul>`;

export { p, a, li, ul };
