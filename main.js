let Id_slip = document.getElementById('id-slip');
let Advice = document.getElementById('advice');
let Img = document.getElementById('img');

async function getUser() {
    try {
        const response = await axios.get(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const advice = response.data.slip
        console.log(advice);
        Id_slip.innerHTML = "Loading...";
        Advice.innerHTML = "Please wait while we fetch the advice...";
        Id_slip.innerHTML  = advice.id
        Advice.innerHTML  = advice.advice
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }
}

Img.addEventListener("click", getUser);



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('font').disabled = false;
});