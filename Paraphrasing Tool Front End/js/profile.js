
function previewImage(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
        const image = document.getElementById('profile-image');
        image.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
}

function saveProfile() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

   

    alert('Profile saved successfully!');
}