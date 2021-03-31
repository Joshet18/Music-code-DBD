module.exports = ({
    name: "volume",
    code: `Volumen: **$message!**
$onlyIf[$message<=200;El volumen máximo es 200%]
$onlyIf[$message!=1;El volumen minimo es 1%]
$onlyIf[$isNumber[$message[1]]==true]
$volume[$message]
`
})
