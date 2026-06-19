function checkResult() {

    let roll = document.getElementById("roll").value;
    let year = document.getElementById("year").value;
    let captcha = document.getElementById("captchaInput").value;
    let resultDiv = document.getElementById("result");

    // CAPTCHA Check
    if (captcha !== "UQAU8") {
        resultDiv.innerHTML = "<h3 style='color:red'>Invalid CAPTCHA</h3>";
        return;
    }

    // DATA
    const students = {
        "230070406": { name: "PRACHI", enrollment: "DX2409338", agpa: "7.65" },
        "230070407": { name: "RAHUL SHARMA", enrollment: "DX2409339", agpa: "8.10" },
        "230070408": { name: "ANJALI VERMA", enrollment: "DX2409340", agpa: "7.95" },
        "230070409": { name: "AMAN SINGH", enrollment: "DX2409341", agpa: "6.85" },
        "230070410": { name: "PRIYA PATEL", enrollment: "DX2409342", agpa: "8.45" },
        "230070411": { name: "VIKAS YADAV", enrollment: "DX2409343", agpa: "7.20" },
        "230070412": { name: "NEHA GUPTA", enrollment: "DX2409344", agpa: "8.30" },
        "230070413": { name: "ROHIT JAIN", enrollment: "DX2409345", agpa: "7.75" },
        "230070414": { name: "SAKSHI DUBEY", enrollment: "DX2409346", agpa: "8.00" },
        "230070415": { name: "ARJUN CHOUHAN", enrollment: "DX2409347", agpa: "7.50" }
    };

    // FIND STUDENT
    if (year === "2" && students[roll]) {

        let s = students[roll];

        resultDiv.innerHTML = `
        <h1>Devi Ahilya Vishwavidyalaya, Indore</h1>
        <h3>Grade Sheet - 2025-26 (Main)</h3>

        <table class="info-table">
            <tr>
                <td>Name</td>
                <td>${s.name}</td>
                <td>Enrollment No.</td>
                <td>${s.enrollment}</td>
            </tr>
            <tr>
                <td>Course</td>
                <td>BCA</td>
                <td>Year</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>Regular</td>
                <td>Roll No.</td>
                <td>${roll}</td>
            </tr>
        </table>

        <table class="summary-table">
            <tr>
                <td>Result</td>
                <td>PASS</td>
            </tr>
            <tr>
                <td>AGPA</td>
                <td>${s.agpa}</td>
            </tr>
        </table>

        <button onclick="window.print()">Print Marksheet</button>
        `;

    } else {
        resultDiv.innerHTML = "<h3 style='color:red'>Result Not Found</h3>";
    }
}