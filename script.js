const doctors = [{
        id: 1,
        name: "Dr. Shiva",
        specialization: "Cardiologist",
        image: "https://via.placeholder.com/200x150",
        available: true
    },
    {
        id: 2,
        name: "Dr. Ram",
        specialization: "Dermatologist",
        image: "https://via.placeholder.com/200x150",
        available: false
    },
    {
        id: 3,
        name: "Dr. Krishna",
        specialization: "Neurologist",
        image: "https://via.placeholder.com/200x150",
        available: true
    },
    {
        id: 4,
        name: "Dr. Anya",
        specialization: "Dermatologist",
        image: "https://via.placeholder.com/200x150",
        available: true
    }
];

const doctorListEl = document.getElementById("doctorList");
const doctorDetailsEl = document.getElementById("doctorDetails");
const bookingFormEl = document.getElementById("bookingForm");

function renderDoctors(list) {
    doctorListEl.innerHTML = "";
    list.forEach(doc => {
        const div = document.createElement("div");
        div.className = "doctor-card";
        div.innerHTML = `
          <img src="${doc.image}" alt="${doc.name}" />
          <h4>${doc.name}</h4>
          <p>${doc.specialization}</p>
          <p>Status: <strong style="color:${doc.available ? 'green' : 'red'}">${doc.available ? 'Available' : 'Unavailable'}</strong></p>
        `;
        div.onclick = () => showDoctorProfile(doc);
        doctorListEl.appendChild(div);
    });
}

function filterDoctors() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const filtered = doctors.filter(doc =>
        doc.name.toLowerCase().includes(value) ||
        doc.specialization.toLowerCase().includes(value)
    );
    renderDoctors(filtered);
}

function showDoctorProfile(doc) {
    doctorDetailsEl.style.display = "block";
    bookingFormEl.style.display = "none";
    doctorDetailsEl.innerHTML = `
        <h2>${doc.name}</h2>
        <p>Specialization: ${doc.specialization}</p>
        <p>Status: <strong style="color:${doc.available ? 'green' : 'red'}">${doc.available ? 'Available' : 'Unavailable'}</strong></p>
        <button class="btn" ${doc.available ? "onclick='showBookingForm()'" : "disabled"}>Book Appointment</button>
      `;
}

function showBookingForm() {
    bookingFormEl.style.display = "block";
}

function submitAppointment() {
    const name = document.getElementById("patientName").value;
    const email = document.getElementById("patientEmail").value;
    const time = document.getElementById("appointmentTime").value;

    if (!name || !email || !time) {
        alert("Please fill all fields");
        return;
    }
    alert(`Appointment booked successfully for ${name} on ${new Date(time).toLocaleString()}`);
    bookingFormEl.style.display = "none";
}

renderDoctors(doctors);
