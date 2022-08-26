let TRs = [];

for(let tr=1; tr<=8; tr++){
   
    let TDs = [];
    
    for (let td = 1; td <= 8; td ++) {
        TDs.push(`<td></td>`)
    }

    TRs.push(`<tr>${TDs.join("")}</tr>`);
}

document.write(`<table>${TRs.join(``)}</table>`)