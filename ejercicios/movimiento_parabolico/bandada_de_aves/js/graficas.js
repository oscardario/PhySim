function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        title: {
            text: 'Bandada de Pajaros'
        },
       
        yAxis: {
            title: {
                text: 'Altura Maxima'
            }
        },
       tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Distancia: <b>' + this.x + '</b> metros y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Distancia Maxima',
            data: [{ x: 0,  y: 0 },{ x: 25.75,  y: 15.5 },{ x: 51.5,  y: 0 }]
        }]
    });
}

