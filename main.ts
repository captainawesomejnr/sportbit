let Activity = 0
input.onButtonPressed(Button.A, function () {
    Activity = randint(1, 13)
    if (Activity == 1) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . # . # .
                . # . # .
                `)
        }
    }
    if (Activity == 2) {
        basic.showString("PUSH UP")
    }
    if (Activity == 3) {
        basic.showString("PLANK(5 SECS FOR EACH REP)")
    }
    if (Activity == 4) {
        basic.showString("RUN ON SPOT")
    }
    if (Activity == 5) {
        basic.showString("SIT UP")
    }
    if (Activity == 6) {
        basic.showString("SHOULDER ROLL")
    }
    if (Activity == 7) {
        basic.showString("ARM SWING")
    }
    if (Activity == 8) {
        basic.showString("OBLIQUE CRUNCH")
    }
    if (Activity == 9) {
        basic.showString("LUGES")
    }
    if (Activity == 10) {
        basic.showString("FREE SQUATS")
    }
    if (Activity == 11) {
        basic.showString("WALL SQUATS")
    }
    if (Activity == 12) {
        basic.showString("ARABESQUE")
    }
    if (Activity == 13) {
        basic.showString("BURPIES")
    }
    if (Activity == 14) {
        basic.showString("'U' JUMPS")
    }
    if (Activity == 15) {
        basic.showString("LATERAL SQUATS")
    }
    if (Activity == 15) {
        basic.showString("TUMMY-UP PLANK(5 SECS FOR EACH REP)")
    }
    if (Activity == 15) {
        basic.showString("TUMMY-UP PUSH UP")
    }
    if (Activity == 16) {
        basic.showString("ONE ARM PUSH UP")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + randint(5, 20) + "REPS")
})
