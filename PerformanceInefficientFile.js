function inefficientLoop() {
    const results = [];
    const size = 1000;
    
    // Using a more efficient loop structure
    for (let i = 0; i < size; i++) {
        results.push(i * 2);
    }
    
    return results;
}

function excessiveDOMManipulation() {
    const container = document.getElementById("container");
    for (let i = 0; i < 1000; i++) {
        const div = document.createElement("div");
        div.innerText = "Item " + i;
        container.appendChild(div); // Appending elements one by one is inefficient
    }
}

function memoryLeakExample() {
    const leaks = [];
    for (let i = 0; i < 100000; i++) {
        leaks.push(function() {
            console.log("This function is still in memory");
        });
    }
}

function deepNesting() {
    function recursiveFunction(n) {
        if (n > 0) {
            return recursiveFunction(n - 1);
        }
        return n;
    }
    recursiveFunction(10000); // Deep recursion can lead to stack overflow
}

function usingGlobalVariables() {
    let globalVar = 0;
    function increment() {
        globalVar++;
    }
    for (let i = 0; i < 1000000; i++) {
        increment(); // Using global variables can lead to performance issues
    }
}

function inefficientSorting() {
    const unsortedArray = [5, 3, 8, 1, 2];
    unsortedArray.sort(); // Default sort is not efficient for numbers
}

function synchronousAjaxCall() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data", false); // Synchronous call blocks the UI
    xhr.send();
    console.log(xhr.responseText);
}

function repeatedFunctionCalls() {
    const resultCache = {};
    function computeHeavyOperation(input) {
        if (resultCache[input]) {
            return resultCache[input];
        }
        // Simulate heavy computation
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i * input;
        }
        resultCache[input] = result;
        return result;
    }
    for (let i = 0; i < 10; i++) {
        computeHeavyOperation(i); // Calling the function multiple times without caching
    }
}