module.exports = ({
name: "defaul-prefix",
code: `el prefijo se ha cambiado a $getServerVar[defaulPrefix]
$setServerVar[prefix;$getServerVar[defaulPrefix]]
$onlyPerms[admin;*No tines permisos para usar este comando*]`
})
