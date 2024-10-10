    // Set the date you're counting down to
    const targetDate = new Date("2024-10-17T00:00:00").getTime();

    // Check every second
    const checkDate = setInterval(() => {
        const now = new Date().getTime();

        // If the target date is reached or passed
        if (now >= targetDate) {
            clearInterval(checkDate); // Stop checking
            document.getElementById("hidden-content").classList.add("visible"); // Reveal the content
        }
    }, 1000);