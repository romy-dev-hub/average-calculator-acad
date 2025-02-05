//program here

function calculateAverage(){

    //algo
    const algoTD = parseFloat(document.getElementById("algoTD").value) || 0;
    const algoTP = parseFloat(document.getElementById("algoTP").value) || 0;
    const algoEXAM = parseFloat(document.getElementById("algoEXAM").value) || 0;
    const algoAverage = ((algoTD + algoTP) / 2) * 0.4 + algoEXAM * 0.6;

    //archi
    const archiTD = parseFloat(document.getElementById("archiTD").value) || 0;
    const archiEXAM = parseFloat(document.getElementById("archiEXAM").value) || 0;
    const archiAverage = (archiEXAM * 2 + archiTD) / 3;

    //logic
    const logicTD = parseFloat(document.getElementById("logicTD").value) || 0;
    const logicEXAM = parseFloat(document.getElementById("logicEXAM").value) || 0;
    const logicAverage = (logicEXAM * 2 + logicTD) / 3 ;

    //proba
    const probaTD = parseFloat(document.getElementById("probaTD").value) || 0;
    const probaEXAM = parseFloat(document.getElementById("probaEXAM").value) || 0;
    const probaAverage = (probaEXAM * 2 + probaTD) / 3;

    //mi
    const miTD = parseFloat(document.getElementById("miTD").value) || 0;
    const miEXAM = parseFloat(document.getElementById("miEXAM").value) || 0;
    const miAverage = (miEXAM * 2 + miTD) / 3;

    //si
    const siTD = parseFloat(document.getElementById("siTD").value) || 0;
    const siEXAM = parseFloat(document.getElementById("siEXAM").value) || 0;
    const siAverage = (siEXAM * 2 + siTD) / 3;

    //english
    const englishAverage = parseFloat(document.getElementById("englishEXAM").value) || 0;
    
    //coeff
    const algoCoeff = 3;
    const archiCoeff = 3;
    const logicCoeff = 3;
    const miCoeff = 3;
    const siCoeff = 3;
    const probaCoeff = 3;
    const englishCoeff = 2;

    //module * coeff
    const totalSum = 
    (algoAverage * algoCoeff) 
    + (archiAverage * archiCoeff)
    + (probaAverage * probaCoeff)
    + (logicAverage * logicCoeff)
    + (miAverage * miCoeff)
    + (siAverage * siCoeff)
    +  (englishAverage * englishCoeff);

    const totalCoeff = algoCoeff + archiCoeff + probaCoeff + miCoeff + siCoeff + logicCoeff + englishCoeff;

    //final result
    const semesterAverage = totalSum / totalCoeff;

    //display l karita
    document.getElementById('result').textContent = `your semester average is: ${semesterAverage.toFixed(2)}`;


}

function calculateALGO(){

    //algo
    const algoTD = parseFloat(document.getElementById("algoTD").value) || 0;
    const algoTP = parseFloat(document.getElementById("algoTP").value) || 0;
    const algoEXAM = parseFloat(document.getElementById("algoEXAM").value) || 0;
    const algoAverage = ((algoTD + algoTP) / 2) * 0.4 + algoEXAM * 0.6;


    //display l karita
    document.getElementById('resultalgo').textContent = `algo average is: ${algoAverage.toFixed(2)}`;

}

function calculateARCHI(){
    //archi
    const archiTD = parseFloat(document.getElementById("archiTD").value) || 0;
    const archiEXAM = parseFloat(document.getElementById("archiEXAM").value) || 0;
    const archiAverage = (archiEXAM * 2 + archiTD) / 3;

    document.getElementById('resultarchi').textContent = `archi average is: ${archiAverage.toFixed(2)}`;
}

function calculateSI(){
    //si
    const siTD = parseFloat(document.getElementById("siTD").value) || 0;
    const siEXAM = parseFloat(document.getElementById("siEXAM").value) || 0;
    const siAverage = (siEXAM * 2 + siTD) / 3;

    document.getElementById('resultsi').textContent = `si average is: ${siAverage.toFixed(2)}`;
}

function calculateMI(){
    //mi
    const miTD = parseFloat(document.getElementById("miTD").value) || 0;
    const miEXAM = parseFloat(document.getElementById("miEXAM").value) || 0;
    const miAverage = (miEXAM * 2 + miTD) / 3;

    document.getElementById('resultmi').textContent = `mi average is: ${miAverage.toFixed(2)}`;
}

function calculatePROBA(){
    //proba
    const probaTD = parseFloat(document.getElementById("probaTD").value) || 0;
    const probaEXAM = parseFloat(document.getElementById("probaEXAM").value) || 0;
    const probaAverage = (probaEXAM * 2 + probaTD) / 3;
 
    document.getElementById('resultproba').textContent = `proba average is: ${probaAverage.toFixed(2)}`;

}

function calculateLOGIC(){
    //logic
    const logicTD = parseFloat(document.getElementById("logicTD").value) || 0;
    const logicEXAM = parseFloat(document.getElementById("logicEXAM").value) || 0;
    const logicAverage = (logicEXAM * 2 + logicTD) / 3 ;

    document.getElementById('resultlogic').textContent = `logic average is: ${logicAverage.toFixed(2)}`;
}

function calculateENGLISH(){
    //english
    const englishAverage = parseFloat(document.getElementById("englishEXAM").value) || 0;

    document.getElementById('resulteng').textContent = `english average is: ${englishAverage.toFixed(2)}`;
}
