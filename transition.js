document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            loadPage(href);
        });
    });

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error al cargar la página: ', error));
    }
});
