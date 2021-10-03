function concatenateData(input) {
    let firstName =  input[0]
    let lastName =  input[1]
    let godini = Number (input[2])
    let grad =  input[3]
    console.log (`You are ${firstName} ${lastName}, a ${godini}-years old person from ${grad}.`)
}

concatenateData(["Maria", "Ivanova", 20, "Sofia"])