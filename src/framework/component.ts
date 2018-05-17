import { renderChanges } from './render-changes';
import { PROPERTIES_SYMBOL } from './types';

export function renderComponent<T>(C: any): T {
    const c = new C();

    // save initial properties
    for (let i = 0; i < c[PROPERTIES_SYMBOL].length; i += 2) {
        c[PROPERTIES_SYMBOL][i + 1] = c[c[PROPERTIES_SYMBOL][i]];
    }

    // set up interceptors that render changes
    for (let i = 0; i < c[PROPERTIES_SYMBOL].length; i += 2) {
        Object.defineProperty(c, c[PROPERTIES_SYMBOL][i], {
            set(v) {
                this[PROPERTIES_SYMBOL][i + 1] = v;
                renderChanges(this);
            },
            get() {
                return this[PROPERTIES_SYMBOL][i + 1];
            },
            configurable: false
        });
    }

    return c;
}