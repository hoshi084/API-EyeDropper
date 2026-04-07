// La fonction magique pour ta présentation
async function pickColor() {
  if (!window.EyeDropper) {
    alert("Ton navigateur ne supporte pas cette API !");
    return;
  }

  const eyeDropper = new EyeDropper();
  
  try {
    const result = await eyeDropper.open();
    // result.sRGBHex contient le code couleur (ex: #ff0000)
    document.body.style.backgroundColor = result.sRGBHex;
    console.log("Couleur choisie :", result.sRGBHex);
  } catch (err) {
    console.log("L'utilisateur a annulé la sélection");
  }
}