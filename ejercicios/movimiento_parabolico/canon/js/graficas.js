function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        title: {
            text: 'Cañon'
        },
       
        yAxis: {
            title: {
                text: 'Altura Maxima en metros'
            }
        },
       tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Distancia: <b>' + this.x + '</b> metros y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Distancia en metros',
            data: [{ x: 0,  y: 0 },{ x: 22.33,  y: 12.41 },{ x: 44.67,  y: 0 }]
        }]
    });
}

