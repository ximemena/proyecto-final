let dado = 0
let carta = 0
let perro = 0
let pez = 0
let gusano = 0
let gato = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        dado = randint(1, 6)
        basic.showNumber(dado)
    }
    carta = randint(1, 4)
    if (carta == 1) {
        perro = 0
        basic.showLeds(`
            . # . . .
            # # . . #
            # # . . #
            . . # # .
            . # . . #
            `)
    }
    if (carta == 2) {
        pez = 0
        basic.showLeds(`
            . . . . #
            . # . # .
            # # # # .
            . # . # .
            . . . . #
            `)
    }
    if (carta == 3) {
        gusano = 0
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # # .
            . . . # #
            . . . . .
            `)
    }
    if (carta == 4) {
        gato = 0
        basic.showLeds(`
            . . . . .
            # # . . #
            # # # # .
            . # . # .
            . . . . .
            `)
    }
})
