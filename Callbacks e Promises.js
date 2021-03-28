//callbacks
function doSomething(callback) {
    setTimeout(function () {
        //did something
        callback('First data')
    }, 1000)
}

function doOtherthing(callback) {
    setTimeout(function () {
        //did something
        callback('Second data')
    }, 1000)
}

function doALL() {
    doSomething(function (data) {
        var processedData = data.split('')

        doOtherthing(function (data2) {
            var processedData2 = data2.split('')

            setTimeout(function () {
                console.log(processedData, processedData2)
            }, 1000)
        })
    })
}

doALL()

//promisses
const doSomeThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //did something
        resolve('Fist data')
    }, 1000)
})

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //did something
        resolve('Second data')
    }, 1000)
})

console.log(doSomeThingPromise)
doSomeThingPromise.then(data => console.log(data))
doSomeThingPromise
    .then(data => { console.log(data); return doOtherThingPromise })
    .then(data2 => console.log(data2))
    .catch(error => console.log('ops, error'))

Promise.all([doOtherThingPromise(), doOtherThingPromise()]).then((data => { //resolve as 2 promisses ao mesmo tempo
    console.log(data)
}))

Promise.race([doSomeThingPromise(), doOtherThingPromise()]).then(data => { //retorn a prommise que resolver primeiro
    console.log(data)
})