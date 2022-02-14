
const firebaseConfig = {
    apiKey: "AIzaSyACf3dd6Q5dyYDbDG9bKVMRb0U5VUe_0-Q",
    authDomain: "webcontactform-7a95d.firebaseapp.com",
    databaseURL: "https://webcontactform-7a95d-default-rtdb.firebaseio.com",
    projectId: "webcontactform-7a95d",
    storageBucket: "webcontactform-7a95d.appspot.com",
    messagingSenderId: "853470943393",
    appId: "1:853470943393:web:0f207810450d40c989f8e0"
  };


  firebase.initializeApp(firebaseConfig);

//form submit


const contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form
function submitForm(e){
    e.preventDefault();

    // Get Values

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // console.log(name);

    saveMessage(name, email, phone, message);


    // enable alert

    document.querySelector(".alert").style.display = "block";

    // remove alert

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();


}

//Function to get form values

function getInputVal(id){
return document.getElementById(id).value;
}

// save message to firebase

function saveMessage(name, email, phone, message){
    var newMessageRef = contactFormDB.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        email: email,
        message: message
    });
}