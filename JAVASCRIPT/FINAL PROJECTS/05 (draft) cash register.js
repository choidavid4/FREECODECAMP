//Recibo el precio, el pago, y un array 2d con el efectivo en caja
//devolver {status: "INSUFFICIENT_FUNDS", change: []} si falta o no tenemos justo
//o {status: "CLOSED", change: [cid]}
//o {status: "OPEN", change: [...]}

function checkCashRegister(price, cash, cid) {
    //primero que nada trabajemos sobre el array, vamos a sacar cuantos de cada billete tengo
    //Son 9 tipos de billete
    let cantidades = {
        "PENNY": calcularCant(cid[0][0],cid[0][1]),
        "NICKEL": calcularCant(cid[1][0],cid[1][1]),
        "DIME": calcularCant(cid[2][0],cid[2][1]),
        "QUARTER": calcularCant(cid[3][0],cid[3][1]),
        "ONE": calcularCant(cid[4][0],cid[4][1]),
        "FIVE": calcularCant(cid[5][0],cid[5][1]),
        "TEN": calcularCant(cid[6][0],cid[6][1]),
        "TWENTY": calcularCant(cid[7][0],cid[7][1]),
        "ONE HUNDRED": calcularCant(cid[8][0],cid[8][1])
    }
    // 0 = penny, 1 = nickel, 2 = dime, 3 = quarter, 4 = one, 5 = five, 6 = ten, 7 = twenty, 8 = one hundred
    let dineroTotal = parseFloat(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2)); //El metodo toFixed() me lo redondea a dos decimales pero me lo convierte en un string
    //Ya tengo la cantidad de cada billete, y el dinero total
    let changeDue = cash - price;
    if(changeDue == 0){
        return {status: "OPEN", change: []};
    }
    if(changeDue > dineroTotal){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    let changeArray = [];
    if (changeDue == dineroTotal){
        //Armar el vuelto
        while(changeDue > 0){
            let maxChange = getMaxChange(changeDue);
            let valorMoneda = getValor(maxChange);
            let cantidadMoneda = changeDue/valorMoneda;
            let cantidadDisponible = cantidades[maxChange];
            if(cantidadMoneda <= cantidadDisponible){
                cantidades[maxChange] -= cantidadMoneda;
                changeArray.push([maxChange, valorMoneda * cantidadMoneda]);
            }
            changeDue = changeDue % maxChange;
        }
    }
}

function getCombinations(change){

}

function calcularCant(nombre,cantidad){
    switch(nombre){
        case "PENNY":
            return Math.round(cantidad/0.01);
        case "NICKEL":
            return Math.round(cantidad/0.05);
        case "DIME":
            return Math.round(cantidad/0.10);
        case "QUARTER":
            return Math.round(cantidad/0.25);
        case "ONE":
            return Math.round(cantidad/1);
        case "FIVE":
            return Math.round(cantidad/5);
        case "TEN":
            return Math.round(cantidad/10);
        case "TWENTY":
            return Math.round(cantidad/20);
        case "ONE HUNDRED":
            return Math.round(cantidad/100);
    }
}

function getValor(name){
    switch(name){
        case "PENNY":
            return 0.01;
        case "NICKEL":
            return 0.05;
        case "DIME":
            return 0.10;
        case "QUARTER":
            return 0.25;
        case "ONE":
            return 1;
        case "FIVE":
            return 5;
        case "TEN":
            return 10;
        case "TWENTY":
            return 20;
        case "ONE HUNDRED":
            return 100;
    }
}

function getMaxChange(change){
    switch(change){
        case change > 20:
        return "TWENTY";
        case change > 10:
        return "TEN";
        case change > 5:
        return "FIVE";
        case change > 1:
        return "ONE";
        case change > 0.25:
        return "QUARTER";
        case change > 0.1:
        return "DIME";
        case change > 0.05:
        return "NICKEL";
        case change > 0.01:
        return "PENNY";
    }
}

console.log(
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);