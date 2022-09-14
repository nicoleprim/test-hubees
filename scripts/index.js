const leadForm = document.getElementById("leadForm");
const businessName = document.getElementById("businessName");
const businessCnpj = document.getElementById("businessCnpj");
const businessEmail = document.getElementById("businessEmail");
const businessPhone = document.getElementById("businessPhone");
const addressStreet = document.getElementById("addressStreet");
const addressNumber = document.getElementById("addressNumber");
const addressCity = document.getElementById("addressCity");
const addressCountry = document.getElementById("addressCountry");
const addressState = document.getElementById("addressState");
const addressZipCode = document.getElementById("addressZipCode");
const financialName = document.getElementById("financialName");
const financialEmail = document.getElementById("financialEmail");
const financialPhone = document.getElementById("financialPhone");
const garageCode = document.getElementById("garageCode");
const timeDayInitial = document.getElementById("timeDayInitial");
const timeDayFinal = document.getElementById("timeDayFinal");
const qtyGuest = document.getElementById("qtyGuest");
const eventDay = document.getElementById("eventDay");
const payEmail = document.getElementById("payEmail");
const payCompanyName = document.getElementById("payCompanyName");
const payCompanyCnpj = document.getElementById("payCompanyCnpj");
const payResponsibleName = document.getElementById("payResponsibleName");
const payResponsibleEmail = document.getElementById("payResponsibleEmail");
const generalObservations = document.getElementById("generalObservations");
const checkBoxOutraEmpresa = document.getElementById("outra-empresa")
const businessPay = document.getElementById("empresa-pagante")

leadForm.addEventListener("submit", (e) => {
    validadeForm();
});

function setSuccessForm(input, message) {
    const form = input.parentElement;
    const successMessage = form.querySelector("small");

    successMessage.innerText = message;

    form.className = "success";
}

function setInputsError(input, message) {
    const form = input.parentElement;
    const errorMessage = form.querySelector("small");

    errorMessage.innerText = message;

    form.className = "fail";
}

function validadeForm() {
    if (document.querySelectorAll('.required') !== "") {
        alert("Solicitação criada. Aguarde o contato da nossa equipe.")
    } else if (getRandom > 5) {
        console.log({ internalCode: 450, message: "Erro no processamento" })
    }
    else {
        console.log({ internalCode: 999999, message: "Parâmetros faltantes na chamada" })
    }
}

function garageCodeLength() {
    const garageCodeValue = garageCode.value
    if (garageCodeValue.length !== 3) {
        setInputsError(garageCode, "O campo código de garagem precisa ter três digitos")
    } else {
        setSuccessForm(garageCode, "")
    }
}

function marcaDesmarca() {
    let checks = document.querySelector('input[type="checkbox"]');
    if (checks) {
        businessPay.style.display = "block";
    }
}

function getRandom() {
    return Math.random() * (10 - 0) + 0;
}