module.exports = ({
    name: "lyrics",
    code: `$onlyIf[$message!=;*Escriba el nombre de la letra*]
$title[**📃 $message Lyrics**]
$description[**Letra de $message**
$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;No se encontró la letra]]
`
})
