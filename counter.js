document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 90; // Adjust speed as needed
    let hasRun = false; // To ensure the counter only runs once
  
    const runCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const updateCount = () => {
                const current = +counter.innerText;
                const increment = Math.ceil(target / speed);
  
                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };
  
            updateCount();
        });
    };
  
    // Intersection Observer API
    const section = document.querySelector(".custom-requirements-section");
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                hasRun = true; // Prevent running multiple times
                runCounter();
                observer.unobserve(entry.target); // Stop observing after animation runs
            }
        });
    });
  
    observer.observe(section);
  });
  