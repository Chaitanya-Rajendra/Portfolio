/* ── View switcher ──────────────────────────────────────── */
function showView(view) {
  document.getElementById('view-home').classList.toggle('active', view === 'home');
  document.getElementById('view-projects').classList.toggle('active', view === 'projects');
  document.getElementById('view-Certificates').classList.toggle('active', view === 'Certificates');

  const cheyHome = document.getElementById('chey-home');
  const cheyProjects = document.getElementById('chey-projects');
  const cheyCertificates = document.getElementById('chey-Certificates');
  if (cheyHome) cheyHome.classList.toggle('active', view === 'home');
  if (cheyProjects) cheyProjects.classList.toggle('active', view === 'projects');
  if (cheyCertificates) cheyCertificates.classList.toggle('active', view === 'Certificates');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger fade-ins for newly visible elements after the view switches
  setTimeout(triggerFades, 50);
}

/* ── Intersection Observer fade-in ──────────────────────── */
function triggerFades() {
  const fades = document.querySelectorAll('.fade:not(.in)');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  fades.forEach(el => io.observe(el));
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  triggerFades();
});
