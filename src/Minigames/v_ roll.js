const { RequiredArg, Command } = require("./../commands.js")

class v_ {
    constructor(id, bit) {
        this.id = id
        this.value = 2 ** bit - 2 ** (bit - 1)
    }
}

v_Types = {
    binary: [
        "<:abyssv_common:873259417041268746>",
        "<:concernedv_common:873259417708154880>",
        "<:cringev_common:873259417007718421>",
        "<:cyclopsv_common:873259417418731531>",
        "<:doublev_common:873259417733312613>",
        "<:evilv_common:873259417813012531>",
        "<:happyv_common:873259416680554506>",
        "<:limev_common:873259416722489434>",
        "<:observantv_common:873259416923820092>",
        "<:oov_common:873259416458264646>",
        "<:overcoloredv_common:873259416365981736>",
        "<:sadv_common:873259416202383410>",
        "<:spiderv_common:873259415636156419>",
        "<:starev_common:873259415732629615>",
        "<:tinyeyesv_common:873259415778758708>",
        "<:ughv_common:873259415657119764>",
        "<:v_common:873259417557151765>",
        "<:yellowcompressedv_common:873259415581646928>",
        "<:burningv_rare:873259766296764447>",
        "<:compressedstarev_rare:873259766317711370>",
        "<:distortedv_rare:873259766418399302>",
        "<:fullbluev_rare:873259765894107138>",
        "<:fullgreenv_rare:873259766103805982>",
        "<:greenoblivionv_rare:873259765726326825>",
        "<:invertedv_rare:873259766145757254>",
        "<:matrixv_rare:873259765160083528>",
        "<:purplespectrev_rare:873259765562744882>",
        "<:reddecayv_rare:873259765000716442>",
        "<:redstarev_rare:873259765143322684>",
        "<:shadoweyesv_rare:873259765118152704>",
        "<:spectrev_rare:873259764820361317>",
        "<:voidoutlinesv_rare:873259765046865940>",
        "<:abyssblackghostv_epic:873260170799640616>",
        "<:colorpainv_epic:873260170820608001>",
        "<:creepyghoststarev_epic:873260170552156221>",
        "<:ghostv_epic:873260170464071700>",
        "<:greenbubblepainv_epic:873260170392793128>",
        "<:hypervoidv_epic:873260169834946621>",
        "<:megahypervoidv_epic:873260170690588683>",
        "<:oblivionv_epic:873260170053029929>",
        "<:ohnov_epic:873260170371801128>",
        "<:painv_epic:873260170254376990>",
        "<:radioactivev_epic:873260169872683028>",
        "<:voidv_epic:873260169658761236>",
        "<:voidvoidv_epic:873260169767817227>",
        "<:3dv_legendary:873260538090635355>",
        "<:bluecorruptedv_legendary:873260538203885568>",
        "<:heateyev_legendary:873260537180479540>",
        "<:hyperdistortedbluev_legendary:873483425816920166>",
        "<:hyperdistortedredv_legendary:873483425548476456>",
        "<:megahypervoideyev_legendary:873260537809616967>",
        "<:neonv_legendary:873260537654435881>",
        "<:purpledistresseyev_legendary:873260537813803049>",
        "<:purpleinvertedv_legendary:873260538086432809>",
        "<:purplewhiteabyssv_legendary:873260537394380820>",
        "<:redstareneonv_legendary:873260537503420426>",
        "<:spectredistresseyev_legendary:873260537201455165>",
        "<:ultracorruptedmessv_legendary:873260537184673942>",
        "<:ultrahyperspoiledapplev_legendar:873260536647778385>",
        "<:ultramegahypervoidv_legendary:873260536719110175>",
    ],
    common: [
        new v_("<:abyssv_common:873259417041268746>", 1),
        new v_("<:concernedv_common:873259417708154880>", 2),
        new v_("<:cringev_common:873259417007718421>", 3),
        new v_("<:cyclopsv_common:873259417418731531>", 4),
        new v_("<:doublev_common:873259417733312613>", 5),
        new v_("<:evilv_common:873259417813012531>", 6),
        new v_("<:happyv_common:873259416680554506>", 7),
        new v_("<:limev_common:873259416722489434>", 8),
        new v_("<:observantv_common:873259416923820092>", 9),
        new v_("<:oov_common:873259416458264646>", 10),
        new v_("<:overcoloredv_common:873259416365981736>", 11),
        new v_("<:sadv_common:873259416202383410>", 12),
        new v_("<:spiderv_common:873259415636156419>", 13),
        new v_("<:starev_common:873259415732629615>", 14),
        new v_("<:tinyeyesv_common:873259415778758708>", 15),
        new v_("<:ughv_common:873259415657119764>", 16),
        new v_("<:v_common:873259417557151765>", 17),
        new v_("<:yellowcompressedv_common:873259415581646928>", 18),
    ],
    rare: [
        new v_("<:burningv_rare:873259766296764447>", 19),
        new v_("<:compressedstarev_rare:873259766317711370>", 20),
        new v_("<:distortedv_rare:873259766418399302>", 21),
        new v_("<:fullbluev_rare:873259765894107138>", 22),
        new v_("<:fullgreenv_rare:873259766103805982>", 23),
        new v_("<:greenoblivionv_rare:873259765726326825>", 24),
        new v_("<:invertedv_rare:873259766145757254>", 25),
        new v_("<:matrixv_rare:873259765160083528>", 26),
        new v_("<:purplespectrev_rare:873259765562744882>", 27),
        new v_("<:reddecayv_rare:873259765000716442>", 28),
        new v_("<:redstarev_rare:873259765143322684>", 29),
        new v_("<:shadoweyesv_rare:873259765118152704>", 30),
        new v_("<:spectrev_rare:873259764820361317>", 31),
        new v_("<:voidoutlinesv_rare:873259765046865940>", 32),
    ],
    epic: [
        new v_("<:abyssblackghostv_epic:873260170799640616>", 33),
        new v_("<:colorpainv_epic:873260170820608001>", 34),
        new v_("<:creepyghoststarev_epic:873260170552156221>", 35),
        new v_("<:ghostv_epic:873260170464071700>", 36),
        new v_("<:greenbubblepainv_epic:873260170392793128>", 37),
        new v_("<:hypervoidv_epic:873260169834946621>", 38),
        new v_("<:megahypervoidv_epic:873260170690588683>", 39),
        new v_("<:oblivionv_epic:873260170053029929>", 40),
        new v_("<:ohnov_epic:873260170371801128>", 41),
        new v_("<:painv_epic:873260170254376990>", 42),
        new v_("<:radioactivev_epic:873260169872683028>", 43),
        new v_("<:voidv_epic:873260169658761236>", 44),
        new v_("<:voidvoidv_epic:873260169767817227>", 45),
    ],
    legendary: [
        new v_("<:3dv_legendary:873260538090635355>", 46),
        new v_("<:bluecorruptedv_legendary:873260538203885568>", 47),
        new v_("<:heateyev_legendary:873260537180479540>", 48),
        new v_("<:hyperdistortedbluev_legendary:873483425816920166>", 49),
        new v_("<:hyperdistortedredv_legendary:873483425548476456>", 50),
        new v_("<:megahypervoideyev_legendary:873260537809616967>", 51),
        new v_("<:neonv_legendary:873260537654435881>", 52),
        new v_("<:purpledistresseyev_legendary:873260537813803049>", 53),
        new v_("<:purpleinvertedv_legendary:873260538086432809>", 54),
        new v_("<:purplewhiteabyssv_legendary:873260537394380820>", 55),
        new v_("<:redstareneonv_legendary:873260537503420426>", 56),
        new v_("<:spectredistresseyev_legendary:873260537201455165>", 57),
        new v_("<:ultracorruptedmessv_legendary:873260537184673942>", 58),
        new v_("<:ultrahyperspoiledapplev_legendar:873260536647778385>", 59),
        new v_("<:ultramegahypervoidv_legendary:873260536719110175>", 60),
    ]
}

Commands.test = new Command("TEST", (message, args) => {
    if (message.author.id != 621307633718132746) throw ("This command is a big wip, you are not allowed to use it *yet*.")
    let EconomySystem = Economy.getEconomySystem(message.author)
    message.channel.send(EconomySystem.vgot.getBinary(v_Types.binary, "❔"))
})