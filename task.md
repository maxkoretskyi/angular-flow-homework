Implementing custom creational and pipeable operators in RxJs
-----------------------------------------------------------

* Implement a creational operator `xhr` that takes a string URL, executes `XHR` request to it
and returns response text. The usage should be like this: `xhr(url).subscribe();`

* Implement a pipeable operator `json` that parses a value as JSON. The usage should be like this:
`xhr(url).pipe(json).subscribe()`
