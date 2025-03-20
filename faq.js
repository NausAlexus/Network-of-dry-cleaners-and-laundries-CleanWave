document.addEventListener("DOMContentLoaded", () => {
    let currentOpenDetails = null;

    document.querySelectorAll(".faq-item").forEach((item, index) => {
        item.addEventListener("click", () => {
            const details = document.getElementById(`faq${index + 1}-details`);

            if (currentOpenDetails === details) {
                details.classList.toggle("show");
                currentOpenDetails = null;
            } else {
                if (currentOpenDetails) {
                    currentOpenDetails.classList.remove("show");
                }
                details.classList.add("show");
                currentOpenDetails = details;
            }
        });
    });
});
