radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
    	
    } else if (receivedString == "S") {
    	
    } else {
    	
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
