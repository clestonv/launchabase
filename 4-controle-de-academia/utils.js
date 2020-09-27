module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 &&
            today.getDate() < birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    date: function(timestamp){
        // Criando um novo objeto de data com o valor que vem no timestamp
        const date = new Date(timestamp)

        // YYYY ano
        const year = date.getUTCFullYear()
        // MM sabendo que o 0 ZERO e 11 ONZE é Dezembro coloco +1
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        // DD 
        const day = `0${date.getUTCDate()}`.slice(-2)

        
        return `${year}-${month}-${day}`
    }
}