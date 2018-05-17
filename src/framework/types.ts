export interface ComponentDescriptor {
    properties: string[];
}

export interface Renderer {
    init(): void;

    clear(): void;

    render(property: string, value: any): void;
}

export const PROPERTIES_SYMBOL = '__afProperties__';
