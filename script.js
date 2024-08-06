function generateSorryTexts(rows, cols) {
    const container = document.getElementById('sorry-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const textWidth = containerWidth / cols;
    const textHeight = containerHeight / rows;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const sorry = document.createElement('div');
            sorry.className = 'sorry';
            sorry.textContent = 'Sorry';
            sorry.style.left = `${j * textWidth}px`;
            sorry.style.top = `${i * textHeight}px`;
            container.appendChild(sorry);
        }
    }
}

// Increased number of rows and columns to add more "Sorry" texts
generateSorryTexts(20, 20); // Adjust the number of rows and columns as needed
