function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        title: {
            text: 'Lanzamiento de piedra'
        },
       
        yAxis: {
            title: {
                text: 'Altura Maxima'
            }
        },
        tooltip: {
        crosshairs: [true],
        formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> segundos y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo en segundos',
            data: [{ x: 0,  y: 0 },{ x: 0.90,  y: 4.01 },{ x: 1.81,  y: 0 }]
        }]
    });
}

