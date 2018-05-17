import { Renderer } from './types';

export class ConsoleRenderer implements Renderer {
    container: Console = null;

    init() {
        this.container = window.console;
    }

    clear() {
        if (this.container === null) {
            this.init();
        }
        this.container.clear();
    }

    render(p: string, v: any) {
        if (this.container === null) {
            this.init();
        }
        console.log(`${p}: ${v}`);
    }
}

export class DOMRenderer implements Renderer {
    container: HTMLElement = null;

    init() {
        this.container = document.createElement('div');
        this.container.classList.add('dom-renderer');
        document.body.appendChild(this.container);
    }

    clear() {
        if (this.container === null) {
            this.init();
        }
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    render(p: string, v: any) {
        if (this.container === null) {
            this.init();
        }

        const span = document.createElement('span');
        span.textContent = `${p}: ${v}`;
        this.container.appendChild(span);
        this.container.appendChild(document.createElement('br'));
    }
}

export let renderer: Renderer = new ConsoleRenderer();

export function setRenderer(type: string) {
    switch (type) {
        case 'dom': {
            renderer = new DOMRenderer();
            break;
        }
        case 'console': {
            renderer = new ConsoleRenderer();
            break;
        }
        default: {
            throw new Error('Unknown Renderer type');
        }
    }
}

export function getRenderer() {
    return renderer;
}