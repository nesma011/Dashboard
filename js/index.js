google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Effort', 'Amount given'],
            ['Completed', 75],
            ['Remaining', 25],
          ]);

        var options = {
          pieHole: 0.4,
          pieSliceTextStyle: {
            color: 'white',
          },
          legend: 'none'
        };
        

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }





      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

   
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2020',  1000,      400],
          ['2021',  1170,      460],
          ['2022',  660,       1120],
          ['2023',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }








   
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart3);
    
          function drawChart3() {
            var data = google.visualization.arrayToDataTable([
              ['Month', 'Sales', 'Expenses' ,'Marketing'],
              ['Jan',  1000,      400    , 874],
              ['Feb',  1170,      460    , 745],
              ['Mar',  660,       1120    , 214],
              ['Apr',  1030,      540    , 654]
              
              
             
            ]);
    
            var options = {
             
              curveType: 'function',
              legend: { position: 'bottom' }
            };
    
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    
            chart.draw(data, options);
          }
       

          
          google.charts.load('current', {'packages':['bar']});
          google.charts.setOnLoadCallback(drawChart4);
    
          function drawChart4() {
            var data = google.visualization.arrayToDataTable([
              ['Month', 'Sales', 'Expenses', 'Profit'],
              ['apr', 1000, 400, 200],
              ['may', 1170, 460, 250],
              ['june', 660, 1120, 300],
              ['july', 1030, 540, 350]
            ]);
    
            var options = {
              chart: {
              }
            };
    
            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
    
            chart.draw(data, google.charts.Bar.convertOptions(options));
          }
    





          google.charts.load('current', {
            'packages':['geochart'],
          });
          google.charts.setOnLoadCallback(drawRegionsMap);
    
          function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
              ['Country', 'Popularity'],
              ['Germany', 200],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600],
              ['RU', 700]
            ]);
    
            
            var options = {
             
              defaultColor: '#f5f5f5',
              datalessRegionColor: '#fae8d0'
            };
    
            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    
            chart.draw(data, options);
          }





          google.charts.load('current', {packages: ['corechart', 'bar']});
          google.charts.setOnLoadCallback(drawMaterial);
          
          function drawMaterial() {
                var data = new google.visualization.DataTable();
                data.addColumn('timeofday', 'Time of Day');
                data.addColumn('number', 'Motivation Level');
                data.addColumn('number', 'Energy Level');
          
                data.addRows([
                  [{v: [8, 0, 0], f: '8 am'}, 1, .25],
                  [{v: [9, 0, 0], f: '9 am'}, 2, .5],
                  [{v: [10, 0, 0], f:'10 am'}, 3, 1],
                  [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
                  [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
                  [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
                  [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
                  [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
                  [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
                  [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
                ]);
          
                var options = {
                  title: 'Motivation and Energy Level Throughout the Day',
                  hAxis: {
                    title: 'Time of Day',
                    format: 'h:mm a',
                    viewWindow: {
                      min: [7, 30, 0],
                      max: [17, 30, 0]
                    }
                  },
                  vAxis: {
                    title: 'Rating (scale of 1-10)'
                  }
                };
          
                var materialChart = new google.charts.Bar(document.getElementById('chart_div2'));
               
               materialChart.draw(data, options);
              }






              google.charts.load("current", {packages:["sankey"]});
              google.charts.setOnLoadCallback(drawChart5);
               function drawChart5() {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'From');
                data.addColumn('string', 'To');
                data.addColumn('number', 'Weight');
                data.addRows([
                   [ 'Brazil', 'Portugal', 5 ],
                   [ 'Brazil', 'France', 1 ],
                   [ 'Brazil', 'Spain', 1 ],
                   [ 'Brazil', 'England', 1 ],
                   [ 'Canada', 'Portugal', 1 ],
                   [ 'Canada', 'France', 5 ],
                   [ 'Canada', 'England', 1 ],
                   [ 'Mexico', 'Portugal', 1 ],
                   [ 'Mexico', 'France', 1 ],
                   [ 'Mexico', 'Spain', 5 ],
                   [ 'Mexico', 'England', 1 ],
                   [ 'USA', 'Portugal', 1 ],
                   [ 'USA', 'France', 1 ],
                   [ 'USA', 'Spain', 1 ],
                   [ 'USA', 'England', 5 ],
                   [ 'Portugal', 'Angola', 2 ],
                   [ 'Portugal', 'Senegal', 1 ],
                   [ 'Portugal', 'Morocco', 1 ],
                   [ 'Portugal', 'South Africa', 3 ],
                   [ 'France', 'Angola', 1 ],
                   [ 'France', 'Senegal', 3 ],
                   [ 'France', 'Mali', 3 ],
                   [ 'France', 'Morocco', 3 ],
                   [ 'France', 'South Africa', 1 ],
                   [ 'Spain', 'Senegal', 1 ],
                   [ 'Spain', 'Morocco', 3 ],
                   [ 'Spain', 'South Africa', 1 ],
                   [ 'England', 'Angola', 1 ],
                   [ 'England', 'Senegal', 1 ],
                  
                ]);
            
                // Set chart options
                var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    var options = {
      width:500,
      sankey: {
        node: {
          colors: colors
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }
    };
            
                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
                chart.draw(data, options);
               }