// ============ EDITA TUS DATOS AQUÍ ============
const projects = [
    { code: "UNIVERSO 01 · ZERO-1", title: "ApexDrive Core", art: "apex", img: "",
      desc: "Plataforma de competencias con carros a escala, telemetría en vivo, ranking de pilotos y transmisión FPV.",
      tech: ["HTML", "CSS", "JavaScript"], link: "https://apex-drive-core.vercel.app" },
    { code: "UNIVERSO 02 · STREETWEAR", title: "UrbanBarber", art: "barber", img: "",
      desc: "Sitio de barbería urbana con servicios, galería, reseñas y reserva de citas.",
      tech: ["HTML", "CSS", "JavaScript"], link: "https://urban-barber-peach.vercel.app" },
    { code: "UNIVERSO 03 · SAKURA", title: "Bootstrap CSS", art: "sakura", img: "",
      desc: "Sitio japonés interactivo: 9 pétalos que abren pergaminos con temas de CSS.",
      tech: ["Bootstrap", "CSS", "JavaScript"], link: "https://jeraychavesx.github.io/bootstrap-css/" },
    { code: "UNIVERSO 04 · PRÓXIMAMENTE", title: "Nuevo proyecto", art: "nuevo", img: "",
      desc: "Espacio reservado para tu próximo proyecto. Cambia el título, la descripción y el link.",
      tech: ["HTML", "CSS", "JavaScript"], link: "#" }
];

// Ruta de tu foto, por ejemplo: "./assets/img/foto.jpg" (vacío = muestra el espacio reservado)
const photo = "";

const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Bootstrap", level: 80 },
    { name: "Git / GitHub", level: 65 },
    { name: "Diseño UI", level: 75 },
    { name: "C++", level: 60 },
    { name: "Python", level: 50 }
];

// Conocimientos sin porcentaje
const groups = [
    { title: "Mantenimiento", items: ["Proactivo", "Preventivo", "Predictivo", "Correctivo"] },
    { title: "Ciberseguridad", items: ["Fundamentos básicos"] },
    { title: "Bases de datos", items: ["SQL", "JSON", "MongoDB"] }
];

const phrases = ["Desarrollador web", "Diseñador de interfaces", "Creador de experiencias"];
// ==============================================

// Pósters: fondo negro, losa roja diagonal, palabra en contorno e ícono de neón
const spark = (x, y, s) => `<use href="#spark" transform="translate(${x} ${y}) scale(${s})" fill="#fff"/>`;

const poster = (word, w, icon, label) => `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="250" fill="#070708"/>
<g fill="none" stroke="#ff1a2e" stroke-width="1" opacity=".45" transform="rotate(-20 70 80)"><ellipse cx="70" cy="80" rx="55" ry="30"/><ellipse cx="70" cy="80" rx="90" ry="50"/><ellipse cx="70" cy="80" rx="130" ry="72"/></g>
<path d="M250 0H400V250H170Z" fill="#ff1a2e"/>
<path d="M232 0H246L166 250H152Z" fill="#fff" opacity=".85"/>
<g transform="translate(8 214) skewX(-10)"><text font-family="Anton,Impact,sans-serif" font-size="92" textLength="${w}" lengthAdjust="spacingAndGlyphs" fill="none" stroke="#fff" stroke-width="2">${word}</text></g>
<g fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)">${icon}</g>
<g fill="#fff"><circle cx="16" cy="16" r="3"/><circle cx="27" cy="16" r="3"/><circle cx="38" cy="16" r="3"/></g>
<rect x="372" y="206" width="12" height="12" transform="rotate(45 378 212)" fill="#050505" stroke="#fff" stroke-width="2"/>
${spark(372, 34, 1.3)}${spark(214, 124, .8)}${spark(30, 120, .7)}
<text x="12" y="241" fill="#fff" font-family="monospace" font-size="8" letter-spacing="3" opacity=".85">${label}</text></svg>`;

const icons = {
    apex: `<g transform="translate(60 62)"><path d="M0 62Q6 48 30 44L60 30Q74 18 96 18L128 18Q150 28 162 46Q182 48 188 60L188 66L0 66Z"/><path d="M66 40L84 26L124 26L142 44Z"/><circle cx="40" cy="66" r="13"/><circle cx="150" cy="66" r="13"/><path d="M-28 28H-4M-40 44H-12M-22 58H-2"/></g><circle cx="335" cy="64" r="26" stroke-dasharray="100 164" transform="rotate(135 335 64)"/><path d="M335 64L353 46"/>`,
    barber: `<g transform="translate(120 98)"><g transform="rotate(-22)"><path d="M0 -6L96 -1L96 1L0 6Z"/><circle cx="-30" cy="0" r="16"/></g><g transform="rotate(22)"><path d="M0 -6L96 -1L96 1L0 6Z"/><circle cx="-30" cy="0" r="16"/></g><circle r="4" fill="#fff"/></g><clipPath id="bp"><rect x="312" y="28" width="36" height="96" rx="17"/></clipPath><rect x="312" y="28" width="36" height="96" rx="17"/><g clip-path="url(#bp)" stroke-width="5"><path d="M306 50l48-18M306 72l48-18M306 94l48-18M306 116l48-18M306 138l48-18"/></g>`,
    sakura: `<g transform="translate(70 50)"><path d="M-10 14Q80 -6 170 14L164 26L-4 26Z"/><path d="M18 26V92M142 26V92M6 52H154"/><circle cx="80" cy="70" r="22"/></g><path d="M300 40l5 8-5 8-5-8zM345 90l4 7-4 7-4-7zM275 120l4 7-4 7-4-7z" fill="#fff"/>`
};

icons.nuevo = `<rect x="86" y="52" width="148" height="86" rx="8"/><path d="M86 74H234"/><path d="M160 90v34M143 107h34"/><circle cx="100" cy="63" r="2.5" fill="#fff"/><circle cx="111" cy="63" r="2.5" fill="#fff"/><circle cx="122" cy="63" r="2.5" fill="#fff"/><path d="M320 70l5 8-5 8-5-8zM350 110l4 7-4 7-4-7z" fill="#fff"/>`;

const arts = {
    apex: poster("APEX", 250, icons.apex, "FPV · TELEMETRÍA · ZERO-1"),
    barber: poster("URBAN", 300, icons.barber, "THE CRAFT OF THE CUT"),
    sakura: poster("SAKURA", 350, icons.sakura, "桜 · BOOTSTRAP CSS"),
    nuevo: poster("NEXT", 250, icons.nuevo, "PRÓXIMO UNIVERSO · EN CONSTRUCCIÓN")
};

// Tarjetas: cada una es un enlace al sitio (usa captura real si pones "img")
const grid = document.getElementById("grid");

projects.forEach((p, i) => {
    const art = p.img ? `<img src="${p.img}" alt="Vista de ${p.title}">` : arts[p.art];
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 reveal";
    col.innerHTML = `
        <a class="poster" href="${p.link}" target="_blank" rel="noopener" aria-label="Abrir ${p.title}">
            <div class="p-art">${art}</div>
            <div class="p-body">
                <div class="uni">${p.code}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="chips">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
                <span class="enter">Entrar →</span>
            </div>
        </a>`;
    grid.appendChild(col);
});

// Habilidades
document.getElementById("skillList").innerHTML = skills.map(s => `
    <div class="col-md-6 skill reveal" data-level="${s.level}">
        <div class="top"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="track"><div class="fill"></div></div>
    </div>`).join("");

document.getElementById("groupList").innerHTML = groups.map(g => `
    <div class="col-md-6 col-xl-4 reveal">
        <div class="group">
            <h4>${g.title}</h4>
            <div class="chips">${g.items.map(t => `<span>${t}</span>`).join("")}</div>
        </div>
    </div>`).join("");

// Foto personal
if (photo !== "/foto.jpg" && photo) {
    const img = document.getElementById("/foto.jpg");
    img.src = photo ;
    img.hidden = false;
    document.getElementById("/foto.jpg").hidden = true;
}

// Aparición al hacer scroll + barras animadas
const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        const fill = en.target.querySelector(".fill");
        if (fill) fill.style.width = en.target.dataset.level + "%";
        io.unobserve(en.target);
    });
}, { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Texto que se escribe solo
const typed = document.getElementById("typed");
let pi = 0, ci = 0, del = false;
(function type() {
    const word = phrases[pi];
    typed.textContent = word.slice(0, ci);
    if (!del && ci === word.length) { del = true; return setTimeout(type, 1500); }
    if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
    ci += del ? -1 : 1;
    setTimeout(type, del ? 40 : 90);
})();

// Curvas de nivel (topografía) de fondo
const blob = "M-200 -40C-180 -160 40 -200 160 -120C260 -50 240 100 120 150C0 200 -220 150 -200 -40Z";
document.getElementById("contours").innerHTML = [.35, .65, .95, 1.25, 1.55, 1.85, 2.15].map((k, i) =>
    `<path d="${blob}" transform="translate(600 420) scale(${k})" fill="none" stroke="${i % 2 ? "#fff" : "#ff1a2e"}" stroke-width="1" vector-effect="non-scaling-stroke"/>`
).join("");

// Telaraña roja animada de fondo (canvas)
const cv = document.getElementById("web-bg");
const ctx = cv.getContext("2d");
const mouse = { x: -999, y: -999 };
let pts = [];

function resize() {
    cv.width = innerWidth;
    cv.height = innerHeight;
    const n = Math.min(90, Math.floor(innerWidth * innerHeight / 16000));
    pts = Array.from({ length: n }, () => ({
        x: Math.random() * cv.width, y: Math.random() * cv.height,
        vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5
    }));
}
addEventListener("resize", resize);
addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
resize();

const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    pts.forEach((p, i) => {
        if (!still) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > cv.width) p.vx *= -1;
            if (p.y < 0 || p.y > cv.height) p.vy *= -1;
        }
        for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
            if (d < 140) {
                ctx.strokeStyle = `rgba(255,26,46,${(1 - d / 140) * .3})`;
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 190) {
            ctx.strokeStyle = `rgba(255,60,80,${(1 - dm / 190) * .8})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = "rgba(255,255,255,.55)";
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
    });
    if (!still) requestAnimationFrame(draw);
}
draw();