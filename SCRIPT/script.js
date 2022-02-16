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

                elementSist: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9,', 'A', 'B', 'C', 'D', 'E', 'F']
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

        let color = '#',
            tamMaximoColor = 6,
            n_aleatorio = null

        for(let indes_i = 0; indes_i < tamMaximoColor;indes_i++){


            n_aleatorio = Math.floor(Math.random() * eleColor.length),
            color+= eleColor[n_aleatorio];
            
        }

        console.log(color)


         

    },

    /* Inicializando as tegs que irão ser usadas */
    get: () => {

        this.buttonClick = document.getElementById('buttonClikckMe');
        this.boxHeder = document.getElementById('BoxColor');
        this.boxBory = document.getElementById('colorPrimaria');
        this.buttonClickNumberingSystem = {
            hex: document.getElementById('hexDecimal'),
            simp: document.getElementById('simp')
        }
    },

    /* Dando funcionalidades para os botons */
    set: () => {

        buttonClick.addEventListener('click', colorFlipper.show)

        buttonClickNumberingSystem.hex.addEventListener('click', (e) => {

            grupoSysten = e.target.id

            let a = colorFlipper.numberingSystem(grupoSysten);

            console.log(a)


        })

        buttonClickNumberingSystem.simp.addEventListener('click', (e) => {

            console.log(grupoSysten = e.target.id)
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