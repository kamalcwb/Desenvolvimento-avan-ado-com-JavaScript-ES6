//fetch
fetch('/data.json').then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json()
    } else {
        throw new Error('Request error')
    }
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log('Erro ', err)
})

//ES7 - Async / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000)
})


const simpleFunc = async () => {
    const data = await asyncTimer()
    return data
}
console.log(simpleFunc().then(data => {
    console.log(data)
}))

