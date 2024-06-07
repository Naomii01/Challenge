document.addEventListener('DOMContentLoaded', function() {
    const photoFrames = document.querySelectorAll('.photo-frame');

    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.outline = '3px solid purple';
        });

        frame.addEventListener('mouseleave', () => {
            frame.style.outline = 'none';
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 400) {
            hideHeaders();
        } else {
            showHeaders();
        }
    });

    function hideHeaders() {
        const headers = document.querySelectorAll('.header, .subheader');
        headers.forEach(header => {
            header.style.display = 'none';
        });
    }

    function showHeaders() {
        const headers = document.querySelectorAll('.header, .subheader');
        headers.forEach(header => {
            header.style.display = 'block';
        });
    }

    // Initially hide headers if screen width is less than or equal to 400px
    if (window.innerWidth <= 400) {
        hideHeaders();
    }
});
