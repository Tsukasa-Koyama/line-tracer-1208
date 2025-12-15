input.onButtonPressed(Button.A, function () {
    button_state = true
})
input.onButtonPressed(Button.B, function () {
    button_state = false
})
let button_state = false
button_state = false
while (true) {
    while (button_state) {
        while (true) {
            if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
                Tinybit.car_sport(90, 90)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            } else if (Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
                Tinybit.car_sport(65, 0)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # . .
                    . . # . .
                    . . # . .
                    `)
            } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black)) {
                Tinybit.car_sport(0, 65)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # # #
                    . . # . .
                    . . # . .
                    `)
            } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
                Tinybit.car_sport(50, 50)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            } else {
                Tinybit.car_sport(0, 0)
                music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            }
        }
    }
    Tinybit.car_sport(0, 0)
    basic.showString("P")
}
basic.forever(function () {
	
})
