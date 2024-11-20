document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const feedbackData = {
        name: document.getElementById('feedbackName').value.trim(),
        email: document.getElementById('feedbackEmail').value.trim(),
        rating: document.getElementById('feedbackRating').value,
        design: document.getElementById('feedbackDesign').value,
        navigation: document.getElementById('feedbackNavigation').value,
        comments: document.getElementById('feedbackComment').value.trim(),
    };

    console.log('Feedback Data:', feedbackData);
    alert('Thank you for your feedback!');
    document.getElementById('feedback-form').reset();
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
