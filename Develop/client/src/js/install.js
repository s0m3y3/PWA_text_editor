const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    //display install button
    installBtn.style.visibility = 'visible';

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('appinstalled', event);
});
