// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,
    slideNumber: true,
    minScale: 0.1,
    maxScale: 5,
    transition: 'none', // none/fade/slide/convex/concave/zoom
    math: {
        // mathjax: 'node_modules/mathjax/MathJax.js',
        config: 'TeX-AMS_SVG-full',
    },

    // Optional reveal.js plugins
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/math/math.js', async: true }
    ]
});
