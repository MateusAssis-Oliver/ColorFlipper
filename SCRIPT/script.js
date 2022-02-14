const colorFlipper = {

    buttonClickColor : null,
    buttonClickNumberingSystem:null,
    boxHeder : null,
    boxBory : null,

    numberingSystem:()=>{
    
        
    },


    get:()=>{

        this.buttonClick = document.getElementById('buttonClikckMe'),
        this.boxHeder       = document.getElementById('BoxColor'),
        this.boxBory        = document.getElementById('colorPrimaria')
        this.buttonClickNumberingSystem = {
            hex : document.getElementById('hexDecimal'),
            simp:document.getElementById('simp')
        }
    },

    set:()=>{

        buttonClick.addEventListener('click',function (){
            console.log(buttonClickNumberingSystem)
        })
     
    },

    show:()=>{
        console.log(this.buttonClick)
        console.log(this.boxHeder)
        console.log(this.boxBory)
        console.log( this.buttonClickNumberingSystem)

    },


}

colorFlipper.get();
colorFlipper.show();
colorFlipper.set();