function toggleCompanyList() {
    var companyList = document.getElementById('companyList');
    companyList.style.display = companyList.style.display === 'none' ? 'block' : 'none';
}

function login() {
    var username = document.getElementById('username').value;
    var newPassword = document.getElementById('newPassword').value;
    var companyList = document.getElementById('companyList');
    var selectedCompany = companyList.options[companyList.selectedIndex].value;


    if (selectedCompany === "") {
        alert("Please select a collaboration company!");
        return;
    }

    document.getElementById('confirmUsername').textContent = username;
    document.getElementById('confirmCompany').textContent = selectedCompany;

    // Hide the login form and show the confirmation page
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('confirmPage').style.display = 'block';
}
