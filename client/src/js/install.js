const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPropt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPropt;
    
    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.defferedPropt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.defferedPropt = null;
});
