//Recibo el precio, el pago, y un array 2d con el efectivo en caja
//devolver {status: "INSUFFICIENT_FUNDS", change: []} si falta o no tenemos justo
//o {status: "CLOSED", change: [cid]}
//o {status: "OPEN", change: [...]}

//Ni siquiera es necesario traducir a cantidades ya que el resultado se devuelve en valores.

function checkCashRegister(price, cash, cid) {
    let dineroTotal = parseFloat(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2));

    let changeDue = cash - price;
    if(changeDue == 0){
        return {status: "OPEN", change: []};
    }

    if(changeDue > dineroTotal){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    if (changeDue == dineroTotal){
        return {status: "CLOSED", change: cid};
    }
    
    let changeArray = [];
    if(changeDue < dineroTotal){
        let todoEnOrden = true;

        //CAMBIAR TODO ESTO
        let maxChange = getValue(getMaxChangeName(changeDue));
        while(changeDue > 0 && todoEnOrden){
            let nombreMoneda = getName(maxChange);
            let valor = 0;
            let disponible = cid[getIndex(nombreMoneda)][1];

            console.log(`nombreMoneda: ${nombreMoneda}\nmaxChange: ${maxChange}\ndisponible: ${disponible}\nchangeDue: ${changeDue}`);
            
            
            while(changeDue >= maxChange && disponible >= maxChange){
                
                changeDue -= maxChange;
                changeDue = parseFloat(changeDue.toFixed(2));
                valor += maxChange;
                disponible -= maxChange;
                
            }

            cid[getIndex(nombreMoneda)][1] = disponible;
            if (valor > 0){
                changeArray.push([nombreMoneda, valor]);
            }

            if(maxChange > 0.01){
                maxChange = getValue(cid[getIndex(getName(maxChange)) - 1][0]);
            }

            console.log(`changeArray: ${changeArray}`)
            console.log("");

            if(disponible == 0 && getIndex(nombreMoneda) == 0) break;
        }
        if(changeDue > 0){
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
    }

    return {status: "OPEN", change: changeArray};

}

function getMaxChangeName(change){
    if(change >= 20) return "TWENTY";
    if(change >= 10) return "TEN";
    if(change >= 5) return "FIVE";
    if(change >= 1) return "ONE";
    if(change >= 0.25) return "QUARTER";
    if(change >= 0.1) return "DIME";
    if(change >= 0.05) return "NICKEL";
    if(change >= 0.01) return "PENNY";
}

function getValue(name){
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

function getName(name){
    switch(name){
        case 0.01:
            return "PENNY";
        case 0.05:
            return "NICKEL";
        case 0.1:
            return "DIME";
        case 0.25:
            return "QUARTER";
        case 1:
            return "ONE";
        case 5:
            return "FIVE";
        case 10:
            return "TEN";
        case 20:
            return "TWENTY";
        case 100:
            return "ONE HUNDRED";
    }
}

function getIndex(name){
    switch(name){
        case "PENNY":
            return 0;
        case "NICKEL":
            return 1;
        case "DIME":
            return 2;
        case "QUARTER":
            return 3;
        case "ONE":
            return 4;
        case "FIVE":
            return 5;
        case "TEN":
            return 6;
        case "TWENTY":
            return 7;
        case "ONE HUNDRED":
            return 8;
    }
}




console.log(
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);