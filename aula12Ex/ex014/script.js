function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('image') 
   var data = new Date()
   //var hora = data.getHours()
   var hora = 14
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = 'manha.png' 
        document.body.style.background = '#fed563'
   } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#d3dde3'
   } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#3d515a'
   }
}
