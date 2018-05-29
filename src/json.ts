import { Observable } from 'rxjs/index';

export function json(outer) {
    return new Observable((inner) => {
        outer.subscribe({
            next(v) {
                let json;
                try {
                    json = JSON.parse(v);
                    inner.next(json);
                } catch (e) {
                    inner.error(e)
                }
            },
            error(e) {
                inner.error(e);
            },
            complete() {
                inner.complete();
            }
        })
    })
}