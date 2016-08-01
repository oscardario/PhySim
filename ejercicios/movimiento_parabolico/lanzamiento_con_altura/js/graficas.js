function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        title: {
            text: 'Lanzamiento con altura'
        },
       
        yAxis: {
            title: {
                text: 'Altura Maxima en metros'
            }
        },
       tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> segundos y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo en Segundos',
            data: [{ x: 0,  y: 30 },{ x: 0.1,  y: 30},{ x: 2.47,  y: 0}]
        }]
    });
}

