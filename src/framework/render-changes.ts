import { renderer } from './renderer';
import { PROPERTIES_SYMBOL } from './types';

export function renderChanges(c: any) {
    const properties = c[PROPERTIES_SYMBOL];
    for (let i = 0; i < properties.length; i += 2) {
        renderer.render(properties[i], properties[i + 1])
    }
}