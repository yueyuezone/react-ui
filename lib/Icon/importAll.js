function importAll(r) {
    r.keys().forEach(r)
}
try {
    importAll(require.context('./iconSvg/',true,/\.svg$/))
} catch (e) {
    //console.log(e)
}
