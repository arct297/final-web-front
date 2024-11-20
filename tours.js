const toursData = {
    "tours": [
        {
            "id": 1,
            "title": "Mountain Escape",
            "price": 120,
            "duration_days": 3,
            "short_description": "A serene getaway to the mountains.",
            "long_description": "Enjoy a budget-friendly escape to breathtaking mountain landscapes, perfect for hikers and nature enthusiasts. This tour includes guided hikes, cozy accommodations, and stunning views.",
            "daily_itinerary": {
                "day_1": "Arrival at the mountain lodge, evening hike to Sunset Point.",
                "day_2": "Full-day guided trek through scenic trails.",
                "day_3": "Relaxation and departure."
            },
            "images": ["image1.jpg", "image2.jpg", "image3.jpg"]
        },
        {
            "id": 2,
            "title": "Seaside Serenity",
            "price": 150,
            "duration_days": 4,
            "short_description": "Unwind by the tranquil seaside.",
            "long_description": "Relax and recharge by the sea. This tour offers comfortable stays, delicious local seafood, and endless beachside fun. Perfect for families and couples.",
            "daily_itinerary": {
                "day_1": "Arrival at the seaside resort, welcome dinner.",
                "day_2": "Morning yoga on the beach, free time for swimming.",
                "day_3": "Local island excursion and seafood tasting.",
                "day_4": "Beach relaxation and departure."
            },
            "images": ["image4.jpg", "image5.jpg", "image6.jpg"]
        },
        {
            "id": 3,
            "title": "City Highlights",
            "price": 100,
            "duration_days": 2,
            "short_description": "Explore the top sights of the city.",
            "long_description": "Discover the rich history and vibrant culture of the city. Visit iconic landmarks, taste local cuisine, and experience the best of urban life.",
            "daily_itinerary": {
                "day_1": "City tour covering historic landmarks.",
                "day_2": "Shopping in local markets and departure."
            },
            "images": ["image7.jpg", "image8.jpg"]
        },
        {
            "id": 4,
            "title": "Countryside Adventure",
            "price": 90,
            "duration_days": 3,
            "short_description": "Reconnect with nature in the countryside.",
            "long_description": "Experience the charm of rural life with guided tours through farmlands, local food experiences, and peaceful countryside landscapes.",
            "daily_itinerary": {
                "day_1": "Arrival and farm tour.",
                "day_2": "Hiking through the countryside.",
                "day_3": "Local village visit and departure."
            },
            "images": ["image9.jpg", "image10.jpg", "image11.jpg"]
        },
        {
            "id": 5,
            "title": "Historical Journey",
            "price": 110,
            "duration_days": 2,
            "short_description": "Step back in time with this historical tour.",
            "long_description": "Learn about the rich history and heritage of the region. Explore ancient sites, museums, and cultural landmarks with expert guides.",
            "daily_itinerary": {
                "day_1": "Visit to ancient ruins and museums.",
                "day_2": "Cultural workshop and departure."
            },
            "images": ["image12.jpg", "image13.jpg"]
        },
        {
            "id": 6,
            "title": "Adventure Trails",
            "price": 140,
            "duration_days": 5,
            "short_description": "Thrill-seekers' paradise.",
            "long_description": "For those who love adventure, this tour offers thrilling activities like rock climbing, kayaking, and zip-lining in stunning natural settings.",
            "daily_itinerary": {
                "day_1": "Arrival and orientation.",
                "day_2": "Rock climbing and zip-lining.",
                "day_3": "Full-day kayaking adventure.",
                "day_4": "Nature trail hiking.",
                "day_5": "Relaxation and departure."
            },
            "images": ["image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg"]
        }
    ]
  };
  
  function createTourCards(tours) {
    const container = document.getElementById('tour-cards-container');
    container.innerHTML = ""; 

    let imagesLoaded = 0;

    const checkAllImagesLoaded = () => {
        if (imagesLoaded === tours.length) {
            document.getElementById('spinner').style.display = 'none';
            container.style.display = 'grid';
        }
    };

    tours.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-card'; 

        const imageContainer = document.createElement('div');
        imageContainer.className = 'tour-card-image'; 
        const img = document.createElement('img');
        img.src = `./src/${tour.images[0]}`;
        img.alt = tour.title;

        img.onload = () => {
            imagesLoaded++;
            checkAllImagesLoaded();
        };

        img.onerror = () => {
            imagesLoaded++;
            checkAllImagesLoaded();
        };

        imageContainer.appendChild(img);

        const infoContainer = document.createElement('div');
        infoContainer.className = 'tour-card-info'; 

        const title = document.createElement('h3');
        title.textContent = tour.title;

        const priceAndDuration = document.createElement('h4');
        priceAndDuration.textContent = `$${tour.price} for ${tour.duration_days} days`;

        const shortDescription = document.createElement('p');
        shortDescription.textContent = tour.short_description;

        const viewMoreButton = document.createElement('button');
        viewMoreButton.textContent = 'View Tour Details';
        viewMoreButton.className = 'tour-card-button';  
        viewMoreButton.onclick = () => {
            window.location.href = `tour.html?id=${tour.id}`; 
        };

        infoContainer.appendChild(title);
        infoContainer.appendChild(priceAndDuration);
        infoContainer.appendChild(shortDescription);
        infoContainer.appendChild(viewMoreButton); 

        card.appendChild(imageContainer);
        card.appendChild(infoContainer);

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'flex';
    createTourCards(toursData.tours);
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