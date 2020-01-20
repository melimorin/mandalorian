let vue_app = new Vue({
    el:'#app',
    data: {
        nom: "Mando",
        profession: "Chasseur de prime",
        transport: "Razorcrest",
        phraseprefere: "this is the way"
    }
})


export default class Galery {
    
    constructor() {

        let promesse_load = fetch("images.json")
        promesse_load.then(function(response){

            promesse_text = response.json()

            promesse_text.then(function(data) {

                for (image of data) {
                    let img = document.createElement("img")
                    img.src = image.source

                    document.body.appendChild(img)
                }
            })
        })


            this.personnageMask = document.querySelector(".personnage-mask");
            // console.log(personnageMask)
			this.grosseImage = document.querySelector(".grosse-image");
            this.galleriePhoto = document.querySelector(".gallerie-photo");
            
            // this.imageContainer = document.createElement("img");
            // this.galleriePhoto.appendChild(this.imageContainer)
			
			this.grosseImage.addEventListener("click", () => {
				this.personnageMask.classList.add("ouvert");
            })

        

    }
}

