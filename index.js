//Bolinha e X
let i = 0;
let X = document.querySelector("#Xpontos");
let O = document.querySelector("#Opontos");
let chances = 0;

function começar(id) {
    const idA = document.querySelector(`#${id}`)
    trocarElemento(idA)
    verificarVencedor(idA);

}

function trocarElemento(id) {
    let a = 0;

    if (i == 0) {
        if (id.classList[0] == "X") {
            return;
        } else {
            $(id).removeClass("X").addClass("O");
            chances++;
            i = 1;
        }

    } else if (i == 1) {
        if (id.classList[0] == "O") {
            return;
        } else {
            $(id).removeClass("O").addClass("X");
            chances++;
            i = 0;
        }
    }
}

function verificarVencedor(id) {
    checkar(id)
}

function checkar(id) {
    const q1 = document.querySelector("#tabela__elemento1")
    const q2 = document.querySelector("#tabela__elemento2")
    const q3 = document.querySelector("#tabela__elemento3")
    const q4 = document.querySelector("#tabela__elemento4")
    const q5 = document.querySelector("#tabela__elemento5")
    const q6 = document.querySelector("#tabela__elemento6")
    const q7 = document.querySelector("#tabela__elemento7")
    const q8 = document.querySelector("#tabela__elemento8")
    const q9 = document.querySelector("#tabela__elemento9")

    verificarX();
    verificarO();

    function verificarX() {
        const array = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

        if (q1.classList[0] == "X" && q2.classList[0] == "X" && q3.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X "
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q4.classList[0] == "X" && q5.classList[0] == "X" && q6.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q7.classList[0] == "X" && q8.classList[0] == "X" && q9.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q1.classList[0] == "X" && q5.classList[0] == "X" && q9.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q3.classList[0] == "X" && q5.classList[0] == "X" && q7.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q3.classList[0] == "X" && q6.classList[0] == "X" && q9.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q1.classList[0] == "X" && q4.classList[0] == "X" && q7.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q2.classList[0] == "X" && q5.classList[0] == "X" && q8.classList[0] == "X") {
            document.querySelector("#vencedor").textContent = "X ";
            X.textContent = parseFloat(X.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        }
        if (chances == 9) {
            chances = 0;
            alert("VELHA");
            limpar(array);
        }
    }

    function verificarO() {
        const array = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

        if (q1.classList[0] == "O" && q2.classList[0] == "O" && q3.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O "
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q4.classList[0] == "O" && q5.classList[0] == "O" && q6.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q7.classList[0] == "O" && q8.classList[0] == "O" && q9.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q1.classList[0] == "O" && q5.classList[0] == "O" && q9.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q3.classList[0] == "O" && q5.classList[0] == "O" && q7.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q3.classList[0] == "O" && q6.classList[0] == "O" && q9.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q1.classList[0] == "O" && q4.classList[0] == "O" && q7.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            limpar(array)
            return;
        } else if (q2.classList[0] == "O" && q5.classList[0] == "O" && q8.classList[0] == "O") {
            document.querySelector("#vencedor").textContent = "O ";
            O.textContent = parseFloat(O.textContent) + 1;
            chances = 0;
            return;
        }
        if (chances == 9) {
            chances = 0;
            alert("VELHA");
            limpar(array);
        }
    }
}

function limpar(array) {
    array.forEach(el => {
        $(el).removeClass("X");
    })
    array.forEach(el => {
        $(el).removeClass("O");
    })
}