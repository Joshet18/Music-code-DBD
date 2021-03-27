module.exports = ({
    name: "song-info",
    code: `$color[08ffc1]
$title[**🎵 Song Info**]
$description[**Nombre** [$songInfo[title]\\]($songInfo[url])]
$addField[**⏳ | Duracion**;**$songInfo[duration]]**]
$addField[**📀 | Añadida por**;**$songInfo[userID]**]
`
})
