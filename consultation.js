document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const phone = document.getElementById('inputPhone').value.trim();
    const message = document.getElementById('inputMessage').value.trim();

    if (!name || !email || !phone || !message) {
        window.alert(`Please, input all values for application!`);
        return;
    }

    console.log('Consultation application data:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    document.querySelector('form').reset();
});


let navbarStatus = false;
let navbarShiftFactor = 250;

const sideNavbarTrigger = document.getElementById('side-navbar-trigger');
if (sideNavbarTrigger) {
    sideNavbarTrigger.addEventListener('click', () => {
        changeNavbarStatus();
    });
}

function changeNavbarStatus() {
    if (navbarStatus) {
        closeNavBar();
    } else {
        openNavbar();
    }
    navbarStatus = !navbarStatus;
}

function openNavbar() {
    var sideNavbarElement = document.getElementById("side-navbar");
    sideNavbarElement.style.width = navbarShiftFactor + "px";
    
    var mainContainerElement = document.getElementById("main");
    mainContainerElement.style.marginLeft = navbarShiftFactor + "px";

    var sideNavbarTriggerElement = document.getElementById("side-navbar-trigger");
    sideNavbarTriggerElement.style.marginLeft = navbarShiftFactor + "px";

    document.getElementById("opened-icon").style.display = "inline";
    document.getElementById("closed-icon").style.display = "none";
}

function closeNavBar() {
    var sideNavbarElement = document.getElementById("side-navbar");
    sideNavbarElement.style.width = "0";
    
    var mainContainerElement = document.getElementById("main");
    mainContainerElement.style.marginLeft = "0";

    var sideNavbarTriggerElement = document.getElementById("side-navbar-trigger");
    sideNavbarTriggerElement.style.marginLeft = "0";

    document.getElementById("opened-icon").style.display = "none";
    document.getElementById("closed-icon").style.display = "inline";
}