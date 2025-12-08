while True:
    if Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.BLACK):
        basic.show_leds("""
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.BLACK):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.BLACK) and Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.BLACK):
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.WHITE) and Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.WHITE):
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)

def on_forever():
    pass
basic.forever(on_forever)
