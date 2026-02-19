radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(alfabed)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(alfabed)
})
let alfabed = 0
alfabed = 1
radio.setGroup(1)
basic.forever(function () {
    if (alfabed == 10) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            # . # . .
            . # # . .
            `)
    }
    if (alfabed == 10 && input.buttonIsPressed(Button.B)) {
        alfabed = 11
        basic.pause(200)
    }
    if (alfabed == 11) {
        basic.showLeds(`
            # . . # .
            # . # . .
            # # . . .
            # . # . .
            # . . # .
            `)
    }
    if (alfabed == 11 && input.buttonIsPressed(Button.B)) {
        alfabed = 12
        basic.pause(200)
    }
    if (alfabed == 12) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    }
    if (alfabed == 12 && input.buttonIsPressed(Button.B)) {
        alfabed = 13
        basic.pause(200)
    }
    if (alfabed == 13) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # # #
            # . # . #
            # . # . #
            `)
    }
    if (alfabed == 13 && input.buttonIsPressed(Button.B)) {
        alfabed = 14
        basic.pause(200)
    }
    if (alfabed == 14) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # . .
            # . # . .
            # . # . .
            `)
    }
    if (alfabed == 14 && input.buttonIsPressed(Button.B)) {
        alfabed = 15
        basic.pause(200)
    }
})
basic.forever(function () {
    if (alfabed == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # . . . #
            # . . . #
            `)
    }
    if (alfabed == 1 && input.buttonIsPressed(Button.B)) {
        alfabed = 2
        basic.pause(200)
    }
    if (alfabed == 2) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
    }
    if (alfabed == 2 && input.buttonIsPressed(Button.B)) {
        alfabed = 3
        basic.pause(200)
    }
    if (alfabed == 3) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . .
            # . . # .
            . # # . .
            `)
    }
    if (alfabed == 2 && input.buttonIsPressed(Button.B)) {
        alfabed = 3
        basic.pause(200)
    }
    if (alfabed == 3) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . .
            # . . # .
            . # # . .
            `)
    }
    if (alfabed == 3 && input.buttonIsPressed(Button.B)) {
        alfabed = 4
        basic.pause(200)
    }
    if (alfabed == 4) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    }
    if (alfabed == 4 && input.buttonIsPressed(Button.B)) {
        alfabed = 5
        basic.pause(200)
    }
})
basic.forever(function () {
    if (alfabed == 5) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # # # . .
            `)
    }
    if (alfabed == 5 && input.buttonIsPressed(Button.B)) {
        alfabed = 6
        basic.pause(200)
    }
    if (alfabed == 6) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (alfabed == 6 && input.buttonIsPressed(Button.B)) {
        alfabed = 7
        basic.pause(200)
    }
    if (alfabed == 7) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . # # .
            # . . # .
            . # # . .
            `)
    }
    if (alfabed == 7 && input.buttonIsPressed(Button.B)) {
        alfabed = 8
        basic.pause(200)
    }
    if (alfabed == 8) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            # . # . .
            `)
    }
    if (alfabed == 8 && input.buttonIsPressed(Button.B)) {
        alfabed = 9
        basic.pause(200)
    }
    if (alfabed == 9) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (alfabed == 9 && input.buttonIsPressed(Button.B)) {
        alfabed = 10
        basic.pause(200)
    }
})
basic.forever(function () {
    if (alfabed == 15) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (alfabed == 15 && input.buttonIsPressed(Button.B)) {
        alfabed = 16
        basic.pause(200)
    }
    if (alfabed == 16) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (alfabed == 16 && input.buttonIsPressed(Button.B)) {
        alfabed = 17
        basic.pause(200)
    }
    if (alfabed == 17) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            . . # # .
            . . # . .
            `)
    }
    if (alfabed == 17 && input.buttonIsPressed(Button.B)) {
        alfabed = 18
        basic.pause(200)
    }
    if (alfabed == 18) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # . . .
            # . # . .
            # . # . .
            `)
    }
    if (alfabed == 18 && input.buttonIsPressed(Button.B)) {
        alfabed = 19
        basic.pause(200)
    }
    if (alfabed == 19) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
    }
    if (alfabed == 19 && input.buttonIsPressed(Button.B)) {
        alfabed = 20
        basic.pause(200)
    }
})
basic.forever(function () {
    if (alfabed == 20) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (alfabed == 20 && input.buttonIsPressed(Button.B)) {
        alfabed = 21
        basic.pause(200)
    }
    if (alfabed == 21) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    if (alfabed == 21 && input.buttonIsPressed(Button.B)) {
        alfabed = 22
        basic.pause(200)
    }
    if (alfabed == 22) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
    }
    if (alfabed == 22 && input.buttonIsPressed(Button.B)) {
        alfabed = 23
        basic.pause(200)
    }
    if (alfabed == 23) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            # . # . #
            # # # # #
            `)
    }
    if (alfabed == 23 && input.buttonIsPressed(Button.B)) {
        alfabed = 24
        basic.pause(200)
    }
    if (alfabed == 24) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (alfabed == 24 && input.buttonIsPressed(Button.B)) {
        alfabed = 25
        basic.pause(200)
    }
})
basic.forever(function () {
    if (alfabed == 25) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    if (alfabed == 25 && input.buttonIsPressed(Button.B)) {
        alfabed = 26
        basic.pause(200)
    }
    if (alfabed == 26) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
    if (alfabed == 26 && input.buttonIsPressed(Button.B)) {
        alfabed = 27
        basic.pause(200)
    }
    if (alfabed == 27) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (alfabed == 27 && input.buttonIsPressed(Button.B)) {
        alfabed = 28
        basic.pause(200)
    }
    if (alfabed == 28) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (alfabed == 28 && input.buttonIsPressed(Button.B)) {
        alfabed = 1
        basic.pause(200)
    }
})
