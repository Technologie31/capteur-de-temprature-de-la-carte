basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.temperature() > 35) {
        basic.showString("C")
    }
    if (input.temperature() >= 15 && input.temperature() <= 35) {
        basic.showString("OK")
    }
    if (input.temperature() < 15) {
        basic.showString("F")
    }
})
