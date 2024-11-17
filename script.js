let textarea = document.querySelector("textarea");
let submitBtn = document.querySelector("button[type=submit]")

let value = textarea.value;
let words = value.match(/\S+/g);
let numOfWords = 0

const submitReport = ()=>{
    if (document.querySelectorAll("option")[0].selected) {
        submitBtn.innerText = 'Select a fraud type';
    }
    else{
        window.location.reload();
    }
}

textarea.addEventListener('input', (event)=>{
    value = event.target.value;
    words = value.match(/\S+/g);
    words == null ? numOfWords = 0 : numOfWords = words.length
    if (numOfWords >= 10) {
        submitBtn.style.backgroundColor = '#6366f1';
        submitBtn.style.cursor = 'pointer';
        submitBtn.innerText = 'Submit';
        submitBtn.addEventListener('click', submitReport)
    }
    else if(10 - numOfWords == 1){
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.style.backgroundColor = '#b1b2f8';
        submitBtn.innerText = '1 word left';
        submitBtn.removeEventListener('click', submitReport)
    }
    else{
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.style.backgroundColor = '#b1b2f8';
        submitBtn.innerText = `${10 - numOfWords} words left`;
        submitBtn.removeEventListener('click', submitReport)
    }
})

let reportButtons = document.querySelectorAll(".report-btn");

reportButtons[0].addEventListener('click', ()=>{
    document.getElementById("report").style.display = "flex";
    document.getElementById("project-name").innerText = "Project 1";
})

reportButtons[1].addEventListener('click', ()=>{
    document.getElementById("report").style.display = "flex";
    document.getElementById("project-name").innerText = "Project 2";
})

let popupBtn = document.getElementById("popup-btn");

popupBtn.addEventListener('click', ()=>{
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
})