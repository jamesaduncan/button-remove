import SelectorSubscriber from "https://jamesaduncan.github.io/selector-subscriber/index.mjs";

const methods = {
    "target": ( aButton ) => {
        const selector = aButton.getAttribute('selector');
        document.querySelectorAll(selector).forEach( n => n.remove() );
    },

    "closest": ( aButton ) => {
        const selector = aButton.getAttribute('selector');
        aButton.closest( selector ).remove();
    }
}

SelectorSubscriber.subscribe('button[remove]', (aButton) => {
    const how = aButton.getAttribute('remove');
    aButton.addEventListener( 'click', () => {
        methods[ how ]( aButton );
    });
});