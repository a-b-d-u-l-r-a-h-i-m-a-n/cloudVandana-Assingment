function showPopup() {
    const form = document.getElementById('survey-form');
    if (form.checkValidity()) {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('date-of-birth').value;
        const country = document.getElementById('country').value;
        const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(g => g.value).join(', ');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        const popup = document.getElementById('popup-content');
        popup.innerHTML = popupContent;
        document.getElementById('overlay').style.display = 'block';
    } else {
        alert('Please fill out all the required fields.');
    }
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    resetForm();
}

function resetForm() {
    const form = document.getElementById('survey-form');
    form.reset();
}