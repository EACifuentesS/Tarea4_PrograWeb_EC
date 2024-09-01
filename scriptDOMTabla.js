document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("productTable");

    // Tabla
    const data = [
        ["1", "AC2254", "Producto no. 1", "Q 125.00"],
        ["2", "HO3216", "Producto no. 2", "Q 185.00"],
        ["3", "RD3216", "Producto no. 3", "Q 235.50"],
        ["4", "PX9864", "Producto no. 4", "Q 369.99"],
        ["5", "ZA98765", "Producto no. 5", "Q 850.50"]
    ];

    const header = table.createTHead();
    const headerRow = header.insertRow();
    ["No.", "Código", "Producto", "Precio"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    const body = table.createTBody();
    data.forEach((rowData, index) => {
        const row = body.insertRow();
        row.className = (index % 2 === 0) ? "even original-even" : "odd original-odd";
        rowData.forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });

    let isOriginalStyle = true;

    document.getElementById("changeStyleButton").addEventListener("click", function() {
        document.querySelectorAll("#productTable tbody tr").forEach((row) => {
            if (isOriginalStyle) {
                row.classList.remove("original-even", "original-odd");
                row.classList.add(row.rowIndex % 2 === 0 ? "changed-even" : "changed-odd");
            } else {
                row.classList.remove("changed-even", "changed-odd");
                row.classList.add(row.rowIndex % 2 === 0 ? "original-even" : "original-odd");
            }
        });
        isOriginalStyle = !isOriginalStyle; 
    });
});
