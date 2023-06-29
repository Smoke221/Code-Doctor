const outputElement = document.getElementById('output-heading');
// Function to set the heading based on the action
function setOutputHeading(action) {
    let heading = '';

    if (action === 'convert') {
        heading = 'Converted Code Output';
    } else if (action === 'debug') {
        heading = 'Debugging Results';
    } else if (action === 'quality-check') {
        heading = 'Quality Check Results';
    }

    outputElement.setAttribute('data-heading', heading);
}
function updateOutputHeading() {
    const heading = outputElement.getAttribute('data-heading');
    document.getElementById("output-heading").textContent = heading;
}

var inputCode = document.getElementById("code")
var selectedLanguage = document.getElementById("language")
var outputGenerated = document.getElementById("output")

function convertCode() {

    setOutputHeading('convert');
    updateOutputHeading();

    // fetching the api for converting the input code
    fetch("https://code-doctor.onrender.com/code-doctor/convert", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: inputCode.value, language: selectedLanguage.value })
    })
        .then(res => res.json())
        .then(data => {
            outputGenerated.textContent = data.response
        })
}


function debugCode() {

    fetch("https://code-doctor.onrender.com/code-doctor/debug", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: inputCode.value })
    })
        .then(res => res.json())
        .then(data => {
            outputGenerated.textContent = data.response
        })

    setOutputHeading('debug');
    updateOutputHeading();
}


function checkCode() {

    fetch("https://code-doctor.onrender.com/code-doctor/quality-check", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: inputCode.value })
    })
        .then(res => res.json())
        .then(data => {
            outputGenerated.textContent = data.response
        })

    setOutputHeading('quality-check');
    updateOutputHeading();
}