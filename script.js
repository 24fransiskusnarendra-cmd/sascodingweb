// Smooth scroll from hero button
document.getElementById("exploreBtn").addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("news").offsetTop,
        behavior: "smooth"
    });
});

// Jersey button interaction
document.getElementById("jerseyBtn").addEventListener("click", () => {
    alert("Official 2025 Barça Home Jersey — available soon in the store!");
});

// Ticket button interaction
document.getElementById("ticketBtn").addEventListener("click", () => {
    alert("Match tickets will be available on the official ticket platform!");
});
