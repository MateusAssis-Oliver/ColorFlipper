const colorFlipper = {

    buttonClickColor: null,
    buttonClickNumberingSystem: null,
    boxHeder: null,
    boxBory: null,
    grupoSysten: 'hex',
    color: 'fff',

    /* 
        Retorna o array comos elementos que caracterizam o opção selecionada no HTML se vai ser gerada 
        uma cor aleatoria em heza Decimal ou em codeco simples cores pre definidas
    */
    numberingSystem: (tSystem) => {

        let typeSystem = {

            hexDecimal: {

                elementSist: ['1', '2', '3', '4', '5', '6', '7', '8', '9,', 'A', 'B', 'C', 'D', 'E', 'F']
            },
            simp: {
                elementSist: ['red', 'black', 'brue']
            }
        }

        for (const key in typeSystem) {

            if (tSystem === `${key}`) {

                return typeSystem[key]
            }
        }

    },

    colorRodon: (eleColor) => {


    },

    get: () => {

        this.buttonClick = document.getElementById('buttonClikckMe');
        this.boxHeder = document.getElementById('BoxColor');
        this.boxBory = document.getElementById('colorPrimaria');
        this.buttonClickNumberingSystem = {
            hex: document.getElementById('hexDecimal'),
            simp: document.getElementById('simp')
        }
    },

    set: () => {

        buttonClick.addEventListener('click',colorFlipper.show)

        buttonClickNumberingSystem.hex.addEventListener('click',(e)=>{

            console.log( grupoSysten = e.target.id)
        })

        buttonClickNumberingSystem.simp.addEventListener('click',(e)=>{

            console.log( grupoSysten = e.target.id)
        })
    },

    show: () => {
        console.log(this.buttonClick)
        console.log(this.boxHeder)
        console.log(this.boxBory)
        console.log(this.buttonClickNumberingSystem)
        console.log(this.grupoSysten)

    },


}

colorFlipper.get();
colorFlipper.set();