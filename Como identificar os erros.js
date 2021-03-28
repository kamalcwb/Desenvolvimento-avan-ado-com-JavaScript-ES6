class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    console.log(name)
    const name = 'Kamal Kaminski'
    message: 'Custom message on custom error'
} catch (err) {
    console.log('Error ', err)
}
finally {
    console.log('Keep going...') //roda o código não importa se tem erro ou não
}
