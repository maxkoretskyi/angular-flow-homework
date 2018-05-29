import { Observable } from 'rxjs/index';

export function xhr(url) {
    return new Observable((o) => {

        function load() {
            o.next(this.responseText);
            o.complete();
        }

        function error(e) {
            o.error(e);
        }

        const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', load);
        oReq.addEventListener('error', error);
        oReq.open('GET', url);
        oReq.send();
    });
}