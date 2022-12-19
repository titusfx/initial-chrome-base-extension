/**
* @description Create a component that does not change the current UI of any webpage
* @author titusfx
* @date 2021-08-14
* @param {string} type
* @param {string} id
* @returns 
* @memberof ContentPageManagerService
*/
export function createInvisibleComponent(type: string, id: string, visibleOnDev = true) {
    const el = document?.createElement(type);
    el.id = !!id ? id : `invisible-component${Math.random()}`;
    el.style.width = '110px';
    el.style.height = '110px';

    if (!visibleOnDev) {
        el.style.width = '0';
        el.style.height = '0';
        el.style.border = '0';
        el.style.zIndex = "-100";
        el.style.position = "fixed";
    }

    // el.style.position = "absolute";
    // el.style.display = 'none';
    return el;
}

/**
 * @description Create an invisible Iframe so contentPage can pass the control to Angular
 * @author titusfx
 * @date 2021-08-14
 * @param {string} id
 * @returns {HTMLIFrameElement}
 * @memberof ContentPageManagerService
 */
export function createInvisibleIframe(id: string, visibleOnDev = true): HTMLIFrameElement {
    return createInvisibleComponent('iframe', id, visibleOnDev) as HTMLIFrameElement;
}