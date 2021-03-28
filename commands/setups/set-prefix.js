module.exports = ({
name: "set-prefix",
code: `$onlyIf[$message!=;Elija un símbolo para su prefijo]
🛠️ El prefix se ha cambiado a **$message**
$setServerVar[prefix;$message]
$onlyPerms[admin;*No tines permisos para usar este comando*]`
})
