export abstract class HttpBackend {
    abstract get(url: string): Promise<any>;
}