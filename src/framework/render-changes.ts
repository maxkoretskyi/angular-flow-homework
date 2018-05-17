import { getRenderer } from './renderers';
import { PROPERTIES_SYMBOL } from './types';

export function renderChanges(c: any) {
    const properties = c[PROPERTIES_SYMBOL];
    for (let i = 0; i < properties.length; i += 2) {
        getRenderer().render(properties[i], properties[i + 1])
    }
}