const dataArray = [
  {
    image: "/assets/img/event-banner.png",
    date: "Wed, 15 Nov, 4:00 PM",
    title: "Sights & Sounds Exhibition",
  },
  {
    image: "/assets/img/event-banner2.png",
    date: "Wed, 15 Nov, 7:00 PM",
    title: "See it in Gold Class",
  },
  {
    image: "/assets/img/event-banner3.jpg",
    date: "Thu, 16 Nov, 4:00 PM",
    title: "See it in Bronze Class",
  },
  {
    image: "/assets/img/event-banner4.jpg",
    date: "Thu, 16 Nov, 7:00 PM",
    title: "See it in Silver Class",
  },
  {
    image: "/assets/img/event-banner5.jpg",
    date: "Fri, 17 Nov, 4:00 PM",
    title: "See it in Premium Class",
  },
  {
    image: "/assets/img/event-banner6.jpg",
    date: "Fri, 17 Nov, 7:00 PM",
    title: "See it in Platinum Class",
  },
  {
    image: "/assets/img/event-banner7.jpg",
    date: "Mon, 13 Nov, 4:00 PM",
    title: "See it in Regular Class",
  },
  {
    image: "/assets/img/event-banner8.jpg",
    date: "Mon, 13 Nov, 7:00 PM",
    title: "See it in Exclusive Class",
  },
];

let dataEvents = "";
dataArray.map((data) => {
  dataEvents += `
  <div class="relative w-[260px] h-[376px] rounded-3xl overflow-hidden">
    <img
      class="w-auto h-full object-cover"
      src="${data.image}"
      alt="banner1"
    />
    <div
      class="absolute bottom-0 w-full text-white flex flex-col gap-1 p-5 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.5)]"
    >
      <div>${data.date}</div>
      <div class="font-semibold text-2xl tracking-wide">
        <a href="/event.html">${data.title}</a>
      </div>
      <div class="flex ml-2">
        <div
          class="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2"
        >
          <img
            class="object-cover w-full h-full"
            src="/assets/img/profile1.jpg"
            alt="profile 1"
          />
        </div>
        <div
          class="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2"
        >
          <img
            class="object-cover w-full h-full"
            src="/assets/img/profile2.jpg"
            alt="profile 2"
          />
        </div>
        <div
          class="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2"
        >
          <img
            class="object-cover w-full h-full"
            src="/assets/img/profile3.jpg"
            alt="profile 3"
          />
        </div>
        <div
          class="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2"
        >
          <img
            class="object-cover w-full h-full"
            src="/assets/img/profile4.jpg"
            alt="profile 4"
          />
        </div>
      </div>
    </div>
  </div>
  `;
});
const eventWrapper = document.getElementById("eventWrapper");
eventWrapper.innerHTML = dataEvents;

// Menu Toggle
const menu = document.getElementById("menu");
const btnToggler = document.getElementById("btn-toggler");

btnToggler.addEventListener("click", function () {
  const token = menu.classList;
  if (token.contains("hidden")) {
    token.remove("hidden");
  } else {
    token.add("hidden");
  }
});

const node = document.createElement("div");
const city = document.createElement("img");
const paragraph = document.createElement("p");
const text = document.createTextNode("Bogor");
node.classList.add("text-white");
node.classList.add("mt-5");
city.setAttribute("src", "/assets/img/city8.jpg");
city.classList.add("w-60");
city.classList.add("rounded-xl");

node.appendChild(city);
node.appendChild(paragraph);
node.appendChild(text);

document.getElementById("newCity").appendChild(node);
