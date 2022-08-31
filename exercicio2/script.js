const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaStringTrim = minhaString.trim()
const minhaStringTrimReplace = minhaStringTrim.replace("________", "sticioso")

console.log(`A quantidade de caracteres da string com espaços é de: ${minhaString.length}
e a de string com trim é de: ${minhaStringTrim.length}`)