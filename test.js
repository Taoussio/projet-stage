const testFunction = (param) => {
    console.log("Hello world ...!", param);
}

const testFunction2 = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('nimporte quoi', param);
            resolve();
        }, 2000);
    });
}

const main = async () => {
    testFunction("a");
    await testFunction2("b");
    testFunction("c");
    //process.exit(0);
}

const main2 = () => {
 main();
 console.log('d');
}

main2();

