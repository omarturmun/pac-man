let pacman = game.createSprite(0 ** 4, 4 ** 0)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
let janaria = game.createSprite(4, 4)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    basic.pause(400)
    if (input.acceleration(Dimension.X) > 200) {
        basic.pause(200)
        pacman.move(1)
    }
    if (input.acceleration(Dimension.X) > -200) {
        basic.pause(200)
        pacman.move(-1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        basic.pause(200)
        pacman.move(1)
    }
    if (input.acceleration(Dimension.Y) > -200) {
        basic.pause(200)
        pacman.move(-1)
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        mamua.move(1)
    }
    mamua.ifOnEdgeBounce()
})
