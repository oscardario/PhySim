function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Trayectoria'
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
            data: [{ x: 0,  y: 10.5},{ x: 2,  y: 18.82},{ x: 6,  y: 35.5}]
        }]
    });

}
