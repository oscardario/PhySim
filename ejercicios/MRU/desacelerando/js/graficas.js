function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Desacelerando'
        },
       
        yAxis: {
            title: {
                text: 'Distancia en metros'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo En Segundos',
            data: [{ x: 0,  y: 0},{ x: 4,  y: 320},{ x: 8,  y: 640},{ x: 12,  y: 960},{ x: 16,  y: 1280}]
        }]
    });

}
