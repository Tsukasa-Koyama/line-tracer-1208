while True:
    if Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.BLACK) and Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.BLACK):
        Tinybit.car_sport(90, 90)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.BLACK):
        Tinybit.car_sport(65, 0)
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # . .
            . . # . .
            . . # . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.BLACK):
        Tinybit.car_sport(0, 65)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # # #
            . . # . .
            . . # . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.WHITE) and Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.WHITE):
        Tinybit.car_sport(50, 50)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    else:
        Tinybit.car_sport(0, 0)
        music.play(music.tone_playable(262, music.beat(BeatFraction.BREVE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)

def on_forever():
    pass
basic.forever(on_forever)
