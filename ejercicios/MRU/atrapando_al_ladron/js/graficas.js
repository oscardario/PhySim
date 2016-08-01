function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Grafica Bandido - Policia'
        },
       
        yAxis: {
            title: {
                text: 'Distancia'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg y Distancia <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Policia',
            data: [{ x: 0,  y: 0  },{ x: 5, y: 55 },{ x: 10, y: 110 },{ x: 15, y: 165 },{ x: 20, y: 220 },{ x: 30, y: 330 }]
        }, {
            name: 'Ladron',
            data: [{ x: 0,  y: 30 },{ x: 5, y: 80 },{ x: 10, y: 130 },{ x: 15, y: 180 },{ x: 20, y: 230 },{ x: 30, y: 330 }]
        }]
    });

}
