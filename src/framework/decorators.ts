import { ComponentDescriptor, PROPERTIES_SYMBOL } from './types';

export function Component(descriptor: ComponentDescriptor) {
    return function (klass: any) {
        const p = klass.prototype;

        const properties = [];
        for (const p of descriptor.properties) {
            properties.push(p, undefined);
        }

        Object.defineProperty(p, PROPERTIES_SYMBOL, {
            value: properties,
            configurable: false,
            writable: false
        });

        return klass;
    }
}