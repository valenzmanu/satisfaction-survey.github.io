document.addEventListener('DOMContentLoaded', function () {
    const surveyFaces = document.querySelectorAll('.survey-face');

    surveyFaces.forEach(function (face) {
        face.addEventListener('click', function () {
            var survey = document.getElementById("survey");
            var thankyou = document.getElementById("thankyou");
            survey.style.display = "none";
            thankyou.style.display = "flex"
            setTimeout(function () {
                location.reload();
            }, 5000);
        });
    });
});
