/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program uses a sonar and diplays distance
*/

let distancefromobject: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// gets the distance and displays it
input.onButtonPressed(Button.A, function() {

    basic.clearScreen()
    distancefromobject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distancefromobject)
    basic.showIcon(IconNames.Happy)
    
})