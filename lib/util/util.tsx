export const cn = (...name:(string|undefined)[])=>{
    return name.filter(Boolean).join(' ')
}