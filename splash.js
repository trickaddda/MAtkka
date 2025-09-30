window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrollbars
    }, 3000); // 3 seconds
});