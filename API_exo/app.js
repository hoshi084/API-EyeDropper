const btn = document.getElementById('startBtn');
const display = document.getElementById('colorDisplay');

btn.addEventListener('click', async () => {
    if (!window.EyeDropper) {
        alert("Navigateur non supporté");
        return;
    }

    const dropper = new EyeDropper();

    try {
        const result = await dropper.open();
        document.body.style.backgroundColor = result.sRGBHex;
        display.textContent = result.sRGBHex;
    } catch (error) {
        console.log("Annulé");
    }
});