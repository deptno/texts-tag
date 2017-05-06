import * as fetch from 'isomorphic-fetch';

!async function() {
    const url     = window['TEXTS_DATA_URL'];
    if (!url) {
        throw new Error('define window.TEXTS_DATA_URL');
    } else {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const elements: Element[] = document.querySelectorAll('*[data-text-id]') as any;

            elements.forEach(element => {
                const id = element.getAttribute(('data-text-id'));
                const text = json[id];
                element.textContent = text;
            });
        } catch(ex) { }
    }
}();