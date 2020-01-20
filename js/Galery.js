Vue.component('infos', {

    data: function () {
  
      return {
  
        nom: "Mando",
        profession: "Chasseur de prime",
        transport: "Razorcrest",
        phraseprefere: "this is the way"
  
      }
  
    },
  
    template: '<span>nom: {{ nom }}</span>',
    template: '<span>profession: {{ profession }}</span>',
    template: '<span>transport: {{ transport }}</span>',
    template: '<span>phraseprefere: {{ phraseprefere }}</span>'
  
  })

export default class Galery {
    
    constructor() {

        let images = fetch("images.json")
        console.log(images)

			this.personnageMask = document.querySelector(".personnage-mask");
			this.grosseImage = document.querySelector(".grosse-image");
            this.galleriePhoto = document.querySelector(".gallerie-photo");
            
            this.imageContainer = document.createElement("img");
            this.galleriePhoto.appendChild(imageContainer)
			
			this.personnageMask.addEventListener("click", () => {
				this.grosseImage.classList.add("ouvert");
            })

        

            this.image1 = document.createElement("img");
            this.image2 = document.createElement("img");
            this.image3 = document.createElement("img");
            this.image4 = document.createElement("img");
        
            this.galleriePhoto.appendChild(image1)
            this.galleriePhoto.appendChild(image2)
            this.galleriePhoto.appendChild(image3)
            this.galleriePhoto.appendChild(image4)

    }
}

