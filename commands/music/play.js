module.exports = ({
    name: "play",
    code: `$description[🎶 Añadido a la cola **$playSong[$message;:x: no se puede encontrar la canción]**]
    $onlyIf[$message!=;Nombre no valido]
$onlyIf[$voiceID==$voiceID[$clientID];Ya estoy reproduciendo en otro canal]
$onlyIf[$voiceID!=;Necesitas estar en un canal de voz!]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
$color[08c9ff]
`
})
