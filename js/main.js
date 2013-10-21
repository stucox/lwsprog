// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    height: '100%',
    width: '100%',

    // theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none
    transitionSpeed: Reveal.getQueryHash().transition || 'fast', // default/fast/slow

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        // { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
        // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

(function () {

    function makeInsertNodesFn (elem) {
        return function insertNodes (data) {
            // Currently only handles data = dom fragment or string
            // TODO: handle different data types
            if (typeof data == 'string') {
                elem.innerHTML = data;
            }
            else {
                if (data.children.length) {
                    elem.appendChild(data.children[0]);
                }
            }
        };
    }

    var includes = document.querySelectorAll('[data-include]');
    for (var i=0; i < includes.length; i++) {
        var elem = includes[i];
        $.get(elem.getAttribute('data-include'), makeInsertNodesFn(elem));
    }
}());
