function grafica(){
    grafica_bandido();
    grafica_persona();
}

function grafica_bandido(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Grafica del Bandido'
        },
       
        yAxis: {
            title: {
                text: 'Distancia'
            }
        },
        series: [{
                name: 'Tiempo',
                data: (function () {
                    var data = [];
data.push({ x: 0,  y: 0  },{ x: 3, y: 12.6 },{ x: 5, y: 21 },{ x: 7, y: 29.4 },{ x: 9.35, y: 39.35  });

                    return data;
                }())
            }]
    });

}

function grafica_persona(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            type: 'line'
        },
        title: {
            text: 'Grafica de la Persona'
        },
       
        yAxis: {
            title: {
                text: 'Distancia'   
            }
        },
        series: [{
                name: 'Tiempo',
                data: (function () {
                    var data = [];
data.push({ x: 0,  y: 0  },{ x: 3, y: 7.5 },{ x: 5, y: 17.5 },{ x: 7, y: 27.5 },{ x: 9.35, y: 39.35  });
                    return data;
                }())
            }]
    });

}