import { LinkComponent } from "../link/link-component";

export function addListeners([node, event, listener]) {
    node()?.addEventListener(event, listener);
}

export function removeListeners([node, event, listener]) {
    node()?.removeEventListener(event, listener);
}

export function select(className, context) {
    const root = context ?? this.shadowRoot;
    const node = className ? root.querySelector(className) : null;
    return node ?? root;
}

export function compose(...innerFunctions) {
    return function (value) {
        return innerFunctions.reduce((acc, func) => func(acc), value)
    }
}

export const mapToLinkElement = node => node.querySelector(LinkComponent.name)

export function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

export function doOverlap(baseRect, overlapRect, bottomPadding = 0) {
    return !(
        baseRect.right < overlapRect.left ||
        baseRect.left > overlapRect.right ||
        baseRect.bottom < overlapRect.top + bottomPadding ||
        baseRect.top + bottomPadding > overlapRect.bottom
    )
}

export function cleanNodes(node) {
    while (node.hasChildNodes()) {
        cleanNodes(node.lastChild);
        node.removeChild(node.lastChild);
    }
    return node;
}