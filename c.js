function calculateAge() {
    const dob = document.getElementById('dob').value;
    const ageOutput = document.getElementById('age');

    if (dob === '') {
        ageOutput.textContent = 'Please select your date of birth.';
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    ageOutput.textContent = age;
}
