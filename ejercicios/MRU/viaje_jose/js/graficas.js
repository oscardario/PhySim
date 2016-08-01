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
            name: 'Tiempo En horas',
            data: [{ x: 0,  y: 0},{ x: 1.76,  y: 426.67},{ x: 3.52,  y: 853.33 },{ x: 5.3,  y: 1280}]
        }]
    });

}
