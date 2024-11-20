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
          "1st day": "Arrival at the mountain lodge, evening hike to Sunset Point.",
          "2nd day": "Full-day guided trek through scenic trails.",
          "3rd day": "Relaxation and departure."
        },
        "images": [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg"
        ]
      },
      {
        "id": 2,
        "title": "Seaside Serenity",
        "price": 150,
        "duration_days": 4,
        "short_description": "Unwind by the tranquil seaside.",
        "long_description": "Relax and recharge by the sea. This tour offers comfortable stays, delicious local seafood, and endless beachside fun. Perfect for families and couples.",
        "daily_itinerary": {
          "1st day": "Arrival at the seaside resort, welcome dinner.",
          "2nd day": "Morning yoga on the beach, free time for swimming.",
          "3rd day": "Local island excursion and seafood tasting.",
          "4th day": "Beach relaxation and departure."
        },
        "images": [
          "image4.jpg",
          "image5.jpg",
          "image6.jpg"
        ]
      },
      {
        "id": 3,
        "title": "City Highlights",
        "price": 100,
        "duration_days": 2,
        "short_description": "Explore the top sights of the city.",
        "long_description": "Discover the rich history and vibrant culture of the city. Visit iconic landmarks, taste local cuisine, and experience the best of urban life.",
        "daily_itinerary": {
          "1st day": "City tour covering historic landmarks.",
          "2nd day": "Shopping in local markets and departure."
        },
        "images": [
          "image7.jpg",
          "image8.jpg"
        ]
      },
      {
        "id": 4,
        "title": "Countryside Adventure",
        "price": 90,
        "duration_days": 3,
        "short_description": "Reconnect with nature in the countryside.",
        "long_description": "Experience the charm of rural life with guided tours through farmlands, local food experiences, and peaceful countryside landscapes.",
        "daily_itinerary": {
          "1st day": "Arrival and farm tour.",
          "2nd day": "Hiking through the countryside.",
          "3rd day": "Local village visit and departure."
        },
        "images": [
          "image9.jpg",
          "image10.jpg",
          "image11.jpg"
        ]
      },
      {
        "id": 5,
        "title": "Historical Journey",
        "price": 110,
        "duration_days": 2,
        "short_description": "Step back in time with this historical tour.",
        "long_description": "Learn about the rich history and heritage of the region. Explore ancient sites, museums, and cultural landmarks with expert guides.",
        "daily_itinerary": {
          "1st day": "Visit to ancient ruins and museums.",
          "2nd day": "Cultural workshop and departure."
        },
        "images": [
          "image12.jpg",
          "image13.jpg"
        ]
      },
      {
        "id": 6,
        "title": "Adventure Trails",
        "price": 140,
        "duration_days": 5,
        "short_description": "Thrill-seekers' paradise.",
        "long_description": "For those who love adventure, this tour offers thrilling activities like rock climbing, kayaking, and zip-lining in stunning natural settings.",
        "daily_itinerary": {
          "1st day": "Arrival and orientation.",
          "2nd day": "Rock climbing and zip-lining.",
          "3rd day": "Full-day kayaking adventure.",
          "4th day": "Nature trail hiking.",
          "5th day": "Relaxation and departure."
        },
        "images": [
          "image14.jpg",
          "image15.jpg",
          "image16.jpg",

        ]
      }
    ]
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const tourId = getQueryParam('id');
if (tourId) {
  renderTourDetails(tourId);
} else {
  console.error("No tour ID found in URL.");
}

function renderTourDetails(tourId) {
  const tour = toursData.tours.find(t => t.id == tourId);

  if (!tour) {
    console.error("Tour not found.");
    return;
  }

  document.title = tour.title;

  const container = document.getElementById('tour-details');
  container.innerHTML = '';

  const title = document.createElement('h1');
  title.textContent = tour.title;
  container.appendChild(title);

  const sliderDiv = document.createElement('div');
  sliderDiv.className = 'tour-slider';

  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slider-container';

  const sliderImage = document.createElement('img');
  sliderImage.id = 'slider-image';
  sliderImage.className = 'slider-image';
  sliderImage.alt = tour.title;
  sliderContainer.appendChild(sliderImage);

  const sliderControls = document.createElement('div');
  sliderControls.className = 'slider-controls';

  const prevBtn = document.createElement('button');
  prevBtn.id = 'prev-btn';
  prevBtn.className = 'slider-btn';
  prevBtn.textContent = '❮';

  const nextBtn = document.createElement('button');
  nextBtn.id = 'next-btn';
  nextBtn.className = 'slider-btn';
  nextBtn.textContent = '❯';

  sliderControls.appendChild(prevBtn);
  sliderControls.appendChild(nextBtn);
  sliderDiv.appendChild(sliderContainer);
  sliderDiv.appendChild(sliderControls);
  container.appendChild(sliderDiv);

  const price = document.createElement('h3');
  price.textContent = `Price: $${tour.price}`;
  container.appendChild(price);

  const durationBox = document.createElement('div');
  durationBox.className = 'duration-box';
  const duration = document.createElement('h4');
  duration.innerHTML = `Duration: <b>${tour.duration_days}</b> days`;
  durationBox.appendChild(duration);
  container.appendChild(durationBox);

  const description = document.createElement('p');
  description.innerHTML = `<i>${tour.long_description}</i>`;
  container.appendChild(description);

  const itineraryHeading = document.createElement('h4');
  itineraryHeading.textContent = 'Itinerary:';
  container.appendChild(itineraryHeading);

  const itineraryTable = document.createElement('table');
  itineraryTable.className = 'itinerary-table';

  const tableHeader = document.createElement('thead');
  tableHeader.innerHTML = `
    <tr>
      <th>Day</th>
      <th>Activity</th>
    </tr>
  `;
  itineraryTable.appendChild(tableHeader);

  const tableBody = document.createElement('tbody');
  Object.entries(tour.daily_itinerary).forEach(([day, activity]) => {
    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    dayCell.textContent = day;

    const activityCell = document.createElement('td');
    activityCell.textContent = activity;

    row.appendChild(dayCell);
    row.appendChild(activityCell);
    tableBody.appendChild(row);
  });

  itineraryTable.appendChild(tableBody);
  container.appendChild(itineraryTable);

  let currentImageIndex = 0;

  const updateSliderImage = () => {
    sliderImage.src = `./src/${tour.images[currentImageIndex]}`;
  };

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + tour.images.length) % tour.images.length;
    updateSliderImage();
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % tour.images.length;
    updateSliderImage();
  });

  updateSliderImage();
}

function getTourIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

document.getElementById('booking-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name-input').value.trim();
  const phone = document.getElementById('phone-input').value.trim();
  const email = document.getElementById('email-input').value.trim();

  const tourId = getTourIdFromURL();

  if (name && phone && email && tourId) {
      console.log("Booking Data:");
      console.log(`Name: ${name}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Tour ID: ${tourId}`);
  } else {
      console.error("All fields are required and tour ID must be valid.");
  }
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