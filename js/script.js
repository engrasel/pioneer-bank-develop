    const LoginBtn = document.getElementById("loginBtn");

    LoginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // select input button and hide login form
        const LoginArea = document.getElementById("Login_Area");
        LoginArea.style.display = "none";

        // show Transaction area
        const TransactionArea = document.getElementById("Transaction_Area");
        TransactionArea.style.display = "block";
    });


    /*--------------- deposit button event handler ---------------*/
    const depositBtn = document.getElementById("deposit_btn");
    depositBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // input deposit number
        // const depositAmount = document.getElementById("deposit").value;
        // const depositNumber = parseFloat(depositAmount);
        const depositNumber = getInputNumber("deposit");

        // current deposit number 
        updateSpanText("currentDeposit", depositNumber);

        document.getElementById("deposit").value = ""; //after input deposit input field clear

        //  current Balance number 
        updateSpanText("currentBalance", depositNumber);
    });

    /*--------------- withdraw button event handler ---------------*/
    const withdrawBtn = document.getElementById("withdraw_btn");
    withdrawBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const withdrawNumber = getInputNumber("withdraw");

        updateSpanText("currentWithdraw", withdrawNumber)
        updateSpanText("currentBalance", -1 * withdrawNumber)

        document.getElementById("withdraw").value = "";
    });

    function getInputNumber(id) {
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
    }

    function updateSpanText(id, depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totall = depositNumber + currentNumber;
        document.getElementById(id).innerText = totall;
    }