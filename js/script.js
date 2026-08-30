document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Typing Effect ----------------
  const text = "My name is Samir Basnet";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    let index = 0;
    let forward = true;

    function typeEffect() {
      if (forward) {
        typingElement.textContent = text.substring(0, index + 1) + ".";
        index++;
        if (index === text.length) forward = false;
      } else {
        typingElement.textContent = text.substring(0, index - 1) + ".";
        index--;
        if (index === 0) forward = true;
      }
      setTimeout(typeEffect, 200);
    }

    typeEffect();
  }

  // ---------------- Education Timeline ----------------
  const educationData = [
    {
      year: "2022 – 2026",
      institution: "Kathmandu University (KU)",
      location: "Dhulikhel, Kavrepalanchok, Nepal",
      degree: "Bachelor of Engineering in Geomatics Engineering (B.E.)",
      link: "https://geom.ku.edu.np/",
      note: "Key Modules: GIS, Autocad, Land Surveying, TBC, Pix4D"
    },
    {
      year: "2019 – 2021",
      institution: "Khwopa Secondary School | NEB",
      location: "Dekocha, Bhaktapur, Nepal",
      degree: "+2 Science | Aggregate Gpa: 3.20",
      link: "https://khwopahss.edu.np/",
      note: "Key Modules: Physics, Chemistry, Mathematics, Computer"
    },
    {
      year: "2006 – 2019",
      institution: "Samudayik Boarding School",
      location: "Panauti, Kavrepalanchok, Nepal",
      degree: "Secondary Education Examination (SEE) | Aggregate Grade: 3.95"
    },
  ];

  educationData.sort((a, b) => {
    const endA = new Date(a.year.split("–")[1].trim());
    const endB = new Date(b.year.split("–")[1].trim());
    return endB - endA; // latest first
  });

  const education = document.getElementById("education");
  if (education) {
    educationData.forEach(edu => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${edu.year}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${edu.institution}</h3>
          <h4>${edu.location}</h4>
          <p class="fw-bold">${edu.degree}</p>
          ${edu.note ? `<p class="fst-italic">${edu.note}</p>` : ""}
          ${edu.link ? `<p><a href="${edu.link}"target="_blank">${new URL(edu.link).hostname}</a></p>` : ""}
        </div>
      `;
      education.appendChild(item);
    });
  }

  // ---------------- My involvement Timeline ----------------
  const involvementdata = [
    {
      date: "March 2025 – Present",
      organization: "Geomatics Engineering Society, KU",
      location: "Kathmandu University, Dhulikhel",
      role: "President",
      description: "Motivating people in enhancing the geo-spatial knowledge through collaboration and related activities.",
      link: "https://ges.ku.edu.np/"
    },
    {
      date: "August 2024 – October 2024",
      organization: "NepGeom 2024",
      location: "Kathmandu University, Dhulikhel",
      role: "Marketing Co-head",
      description: "Coordinated with the sponsors and managed the marketing team for the event.",
      link: "https://ges.ku.edu.np/"
    },
    {
      date: "June 2018 – July 2019",
      organization: "Rotract Club of Panauti",
      location: "Panauti, Nepal",
      role: "Community service director",
      description: "Worked for organizing community events and awareness programs.",
    },

  ];
  involvementdata.sort((a, b) => {
    const endA = new Date(a.date.split("–")[1].trim());
    const endB = new Date(b.date.split("–")[1].trim());
    return endB - endA; // latest first
  });
  const experience = document.getElementById("experience");
  if (experience) {
    involvementdata.forEach(exp => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${exp.organization}</h3>
          <h4>${exp.location}</h4>
          <p class="fw-bold">${exp.role}</p>
          ${exp.description ? `<p class="fst-italic">${exp.description}</p>` : ""}
          ${exp.link ? `<p><a href="${exp.link}" target="_blank">${new URL(exp.link).hostname}</a></p>` : ""}
        </div>
      `;
      experience.appendChild(item);
    });
  }

  // ---------------- Projects Section ----------------
  const projects = [
    {
      id: "project1",
      title: "3D model of AWMRC building, KU",
      duration: "August 2023 – October 2023",
      organization: "Kathmandu University (KU)",
      description: "This is the first year, second semester project for my bachelor's degree. Working with a team, I helped with measuring the actual structure, chossing proper scale for the 3D model, and crafting the 3D structure and making a detailed report",
      tools: "Msword, AutoCAD, ",
      //link: "",
      image: "img/awmrc 3D model.jpeg"
    },
    {
      id: "project2",
      title: "Agricultural land suitability of Kavrepalalanchok District, Nepal",
      duration: "August 2024 – November 2024",
      organization: "Kathmandu University (KU)",
      description: "This is the 4th semester project where I got to use the raster and vector data in accessing the agricultural land suitability area.",
      tools: "ArcGIS, Google Earth Engine, Excel, Msword",
      link: "file/Mini_report_GIS (1).pdf",
      image: "img/agricultural suitability.png"
    },
    {
      id: "project3",
      title: "Closed survey camp on Levelling, Traversing, Tacheometry, Intersection and Resection",
      duration: "November 2024 – December 2024",
      organization: "Kathmandu University (KU)",
      description: "This is my closed survey camp where I got familiar with the survey techniques like levelling, traversing, tacheometery, resection and intersection",
      tools: "Excel, ArcGIS, Msword",
      link: "file/grp3_finallll_print4th sem.pdf",
      image: "img/4th sem field.jpeg"
    },
    {
      id: "project4",
      title: "Cardamom Suitability Assessment in Lamjung District",
      duration: " May 2025 – July 2025 ",
      organization: "Kathmandu University (KU)",
      description: "Along with my team members, we assessed the cardamom suitability using the MCDM approach by analyzing the various influencing factors in Lamjung District.",
      tools: "ArcMap, Excel, Google Earth Engine",
      link: "file/5th sem report cardamom.pdf",
      image: "img/cardamom_suitability.png"
    },
    {
      id: "project5",
      title: "Topographical, Hydropower, Bridge and Route Surveying | Jiri, Nepal",
      duration: "November 2025 – December 2025",
      organization: "Kathmandu University (KU)",
      description: "Utilized DGPS to establish control points and employed total stations and prisms for various surveying tasks, including projects related to hydropower, routes, transmission lines, bridges, and canals. Processed the collected data and visualized it using ArcGIS.",
      tools: "ArcGIS, Total Station (TS), DGPS, Prism, Measuring Tape",
      link: "file/Grp9_final report.pdf",
      image: "img/6th toposurvey.jpeg"
    },
    {
      id: "project6",
      title: "Parcel Conflict Detection System",
      duration: "February 2026 – March 2026",
      organization: "Kathmandu University (KU)",
      description: "The system designed to identify the conflicts in land parcel boudnaries using JAVA.",
      tools: "Ms.Excel, VsCode",
      //link: "",
      image: "img/parcel conflict.png"
    },
    {
      id: "project7",
      title: "Gantabya Sahayak, A WebGIS Platform for Toursim Planning and Emergency Services across Nepal",
      duration: "June 2026 – July 2026",
      organization: "Kathmandu University (KU)",
      description: "A 7th semester WebGIS project where we developed a web application to fill up the gap in tourism sector. ",
      tools: "HTML, CSS, JavaScript, OSM, Leaflet, TurfJS, FastAPI ",
      link: "https://sugam.onrender.com/",
      image: "img/Gantabya.png"
    },
    {
      id: "project8",
      title: "Digital Cadastre, DGPS, UAV survey",
      duration: "July 2026 – August 2026",
      organization: "Kathmandu University (KU)",
      description: "A 8th semester survey field where we survey the same area with traditional techniques ranging from plane table, digital cadastre and moving to the UAV survey.",
      tools: "Ms Excel, Plane Table, Total Station, Digital Level, DGPS, UAV",
      //link: "",
      image: "img/dgps.jpeg"
    }
  ];

  projects.sort((a, b) => {
    const endA = new Date(a.duration.split("–")[1].trim());
    const endB = new Date(b.duration.split("–")[1].trim());
    return endB - endA || a.title.localeCompare(b.title);
  });

  const projectContainer = document.getElementById("projects-container");
  const modalContainer = document.getElementById("modals-container");

  if (projectContainer && modalContainer) {
    projects.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      const imgTag = p.image
        ? `<img src="${p.image}" alt="${p.title}" class="project-img mb-2">`
        : "";

      col.innerHTML = `
        <div class="project-card h-100 p-0 shadow-sm border rounded-4">
          ${imgTag}
          <div class="p-3">
            <h5 class="fw-bold">${p.title}</h5>
            <p class="text-muted small mb-0">${p.duration}</p>
            <p class="fw-bold small mb-2">${p.organization}</p>
            <p class="clamp-3">${p.description}</p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#${p.id}Modal" class="text-resetfw-semibold ieee-link  text-decoration-underline">See More ...</a>
          </div>
        </div>
      `;
      projectContainer.appendChild(col);

      // Create Modal
      modalContainer.innerHTML += `
        <div class="modal fade" id="${p.id}Modal" tabindex="-1" aria-labelledby="${p.id}Label" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-center fw-bold w-100" id="${p.id}Label">${p.title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body pt-2">
                <img src="${p.image}" alt="${p.title}" class="img-fluid rounded mb-4" style="max-height: 300px; object-fit: cover; width: 100%;">
                <p><strong>Duration:</strong> ${p.duration}</p>
                <p><strong>Description:</strong> ${p.description}</p>
                <p><strong>Tools:</strong> ${p.tools || "Not specified"}</p>
                <p><strong>Links:</strong><br>
                  ${p.link ? p.link.split("|").map(l => {
        const url = l.trim();

        let displayText;

        if (url.toLowerCase().endsWith(".pdf")) {
          const fileName = url.split('/').pop().replace('.pdf', '');
          displayText = fileName.replace(/_/g, ' ');
        } else {
          try {
            const u = new URL(url);
            displayText = u.hostname.replace(/^www\./, '');
          } catch {
            displayText = "🔗 Visit Website";
          }
        }

        return `
                      <a href="${url}" target="_blank" rel="noopener noreferrer"
                        class="d-block mb-1 text-primary">
                        ${displayText}
                      </a>`;
      }).join("") : "<em>No link available</em>"}
                  </p>             
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  // ---------------- Publications Section  ----------------
  // Publications Data
  /*const publicationsData = [
    {
      title: "",
      publisher: "",
      date: "",
      link: ""
    },
    {
      title: "",
      publisher: "",
      date: "",
      link: ""
    }
  ];
*/
  // Target container
  const publicationsBox = document.getElementById("Publications-box");

  // Clear default text
  if (publicationsBox && typeof publicationsData !== 'undefined') {
    publicationsBox.innerHTML = "";

    const row = document.createElement("div");
    row.className = "row g-4";

    publicationsData.forEach(pub => {
      const col = document.createElement("div");

      // 3 per row on desktop, 1 per row on mobile
      col.className = "col-12 col-md-4";

      col.innerHTML = `
      <div class="project-card h-100 p-3 shadow-sm border rounded-4">
        <h5 class="fw-bold">${pub.title}</h5>
        <p class="text-muted small mb-1">
        <strong>Publisher:</strong> 
        <a href="https://www.ieee.org/" target="_blank" class="text-decoration-none">
          ${pub.publisher}
        </a></p>
        <p class="small mb-2"><strong>Published on:</strong> ${pub.date}</p>
        <p class="small mb-2">
          <strong>Link :</strong>
          <a href="${pub.link}" target="_blank" class="text-resetfw-semibold ieee-link text-decoration-underline">${pub.link.replace(/^https?:\/\//, "")}</a>
        </p>

          <!-- <a href="${pub.link}" target="_blank" class="text-resetfw-semibold ieee-link text-decoration-underline">Read paper on IEEE ...</a>--!>
      </div>
    `;

      row.appendChild(col);
    });

    publicationsBox.appendChild(row);
  }

  // ---------------- Skills Section ----------------
  const skillsData = [
    { name: "ArcGIS / ArcGIS Pro", percentage: 90, color: "#7369a0" },
    { name: "AutoCAD", percentage: 45, color: "#afcf63" },
    { name: "Differential GPS", percentage: 85, color: "#dbce11" },
    { name: "WebGIS", percentage: 45, color: "#585427" },
    { name: "UAV", percentage: 60, color: "#acc553" },
    { name: "Python", percentage: 70, color: "#dbce11" },
    { name: "QGIS", percentage: 85, color: "#ec90c6" },
    { name: "Google Earth Engine", percentage: 70, color: "#71d16e" },
    { name: "Microsoft 365", percentage: 90, color: "#ca5499" },
    { name: "Plane Table", percentage: 90, color: "#04d415" },
    { name: "Theodolite", percentage: 70, color: "#71d16e" },
    { name: "Trimble Business Center", percentage: 65, color: "#dbce11" },
    { name: "HTML/CSS/JS", percentage: 70, color: "#e98007" },
    { name: "Total Station", percentage: 75, color: "#dbce11" },
    { name: "Pix4D", percentage: 75, color: "#3292af" },
  ];
  skillsData.sort((a, b) => a.name.localeCompare(b.name));
  const skillsBox = document.getElementById("skills-box");
  if (skillsBox) {
    skillsData.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <h6>${skill.name}</h6>
        <div class="progress-bar">
          <div style="background: ${skill.color}; width:0%;">
            <span>${skill.percentage}%</span>
          </div>
        </div>
      `;
      skillsBox.appendChild(skillDiv);
    });

    // Animate bars — run immediately + on scroll
    function animateBars() {
      const progressBars = skillsBox.querySelectorAll('.progress-bar div');
      progressBars.forEach((bar, index) => {
        bar.style.width = skillsData[index].percentage + '%';
      });
    }

    // Fallback: always animate after short delay (works with file:// and http://)
    setTimeout(animateBars, 300);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) animateBars();
      });
    }, { threshold: 0.1 });

    // Observe the skills container once
    observer.observe(skillsBox);

    // Add draggable/touch support for each skill
    skillsBox.querySelectorAll('.skill').forEach((skillDiv, index) => {
      const bar = skillDiv.querySelector('.progress-bar div');
      const circle = bar.querySelector('span');
      const container = skillDiv.querySelector('.progress-bar');
      let dragging = false;

      // Mouse events
      circle.addEventListener("mousedown", e => { dragging = true; e.preventDefault(); });
      document.addEventListener("mouseup", () => dragging = false);
      document.addEventListener("mousemove", e => {
        if (!dragging) return;
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        bar.style.width = (x / rect.width * 100) + "%";
      });

      // Touch events for mobile
      circle.addEventListener("touchstart", e => { dragging = true; e.preventDefault(); });
      document.addEventListener("touchend", () => dragging = false);
      document.addEventListener("touchmove", e => {
        if (!dragging) return;
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        bar.style.width = (x / rect.width * 100) + "%";
      }, { passive: false });
    });

    observer.observe(skillsBox);
  }


  // ---------------- Gallery Section ----------------
  /* const galleryData = [
     
   ];
   galleryData.sort((a, b) => new Date(b.dates) - new Date(a.dates));
   const galleryRow = document.getElementById("gallery-row");
   if (galleryRow) {
     galleryData.forEach(item => {
       const colDiv = document.createElement("div");
       colDiv.className = "col-sm-6 col-md-4 col-lg-3 gallery-item";
       colDiv.innerHTML = `
         <img src="${item.src}" alt="${item.title}" class="gallery-img">
         <div class="gallery-title">${item.title}</div>
         <div class="gallery-dates">${item.dates}</div>
       `;
       galleryRow.appendChild(colDiv);
     });
   }
 */


  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImg && closeBtn) {
    // Open image
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("gallery-img")) {
        lightbox.style.display = "block";
        lightboxImg.src = e.target.src;
      }
    });

    // Close button
    closeBtn.onclick = function () {
      lightbox.style.display = "none";
    }

    // Close if clicking outside
    lightbox.onclick = function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    }

    // Close with ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    });
  }

  // ---------------- Reveal Section ----------------
  // Add 'reveal' class to all divs inside <main> (runs AFTER dynamic content is added)
  document.querySelectorAll('main div').forEach(div => div.classList.add('reveal'));

  // Select all elements with class 'reveal'
  const reveals = document.querySelectorAll('.reveal');

  // Intersection Observer for scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');  // show when visible
      } else {
        entry.target.classList.remove('active'); // hide when not visible
      }
    });
  }, { threshold: 0.13 });

  // Observe all reveal elements
  reveals.forEach(el => revealObserver.observe(el));
});


//  contact form submission
// Supabase credentials
const SUPABASE_URL = "https://dykgtaxikoexmgnrkgtq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a2d0YXhpa29leG1nbnJrZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDQwMzksImV4cCI6MjA3ODI4MDAzOX0.2wjTsUi4FYfkcjgkCMILQhEKEOrFZpiOthrz2t-iAEM";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comment = document.getElementById("comment").value.trim();

  status.textContent = "Submitting...";

  const { data, error } = await supabaseClient
    .from("Samir Portfolio Contact")
    .insert([{ name, email, comment }]);

  if (error) {
    console.error("Insert Error:", error);
    status.textContent = "❌ Failed to submit. Please try again.";
  } else {
    status.textContent = "✅ Submitted successfully!";
    form.reset();

    // Hide the message after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      status.textContent = "";
    }, 5000);
  }

});

/*
const honoursData = [
  {
    image: "image/.jpg",
    title: "Pale Blue Dot: Visualization Challenge",
    organizer: "NASA and UNVIE",
    description: "\"<strong>The Honorable Mention</strong>\" in DrivenData's Pale Blue Dot: Visualization Challenge, for submission of LULC classification and damage assessment of the 2008 Sapta Koshi Flood using multi-temporal Landsat data",
    link: "https://drivendata-public-assets.s3.amazonaws.com/nasa-open-science-gallery/nayan.bakhadyo/visual.png",
    date: "March-14, 2024"
  },
  {
    image: "image/Map_Design_Competition.png",
    title: "Map Design Competition",
    organizer: "Geomatics Engineering Students' Association of Nepal",
    description: "Secured the <strong>1<sup>st</sup> position</strong> in the Map Design Competition for the submission on the Fire Susceptibility Map of Kathmandu Metropolitan City",
    link: "https://www.facebook.com/share/p/1GKWoL6aWL",
    date: "June-27, 2024"
  },
];

honoursData.sort((a, b) => new Date(b.date) - new Date(a.date));
const honoursContainer = document.getElementById("honours-container");

honoursData.forEach(award => {
  const item = document.createElement("div");
  item.className = "col-12";
  item.innerHTML = `
    <div class="honour-card d-flex gap-2 align-items-start mx-auto shadow-sm border rounded-4">
      <div class="d-flex flex-column flex-md-row ">
        <!-- Left: Fixed 300px Image -->
        <div class="flex-shrink-0 text-center">
          <img src="${award.image}" alt="${award.title}" class="honour-img shadow">
        </div>

        <!-- Right: Content -->
        <div class="flex-grow-1 p-3 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="fw-bold">${award.title}</h5>
          <span">
              <i class="fas fa-calendar-alt me-2"></i>${award.date}
            </span>
            </div>
          <h5>Organizer: ${award.organizer}</h5>
          <p>${award.description}</p>
          ${award.link ? `
          <p class="mb-0 pb-0">
            <a href="${award.link}" target="_blank">
              ${award.link.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          </p>
        ` : ""}
          </div>
      </div>
    </div>
  `;
  honoursContainer.appendChild(item);
});
*/

