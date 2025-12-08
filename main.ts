while (true) {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black)) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
