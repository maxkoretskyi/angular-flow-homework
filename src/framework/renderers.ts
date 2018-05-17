import { Renderer } from './types';

export class ConsoleRenderer {
}

export class DOMRenderer {
}

export let renderer: Renderer;

export function setRenderer(type: string) {
    switch (type) {
    }
}

export function getRenderer() {
    return renderer;
}