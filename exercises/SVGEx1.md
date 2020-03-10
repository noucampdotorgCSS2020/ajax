# SVG – Exercise 1

> Complete ALL the exercises in this section. Ask thomas.devine@lyit.ie for help.


## Part 1

1.	Examine and open the file [http://localhost/ajax/svgBarChart.html](http://localhost/ajax/svgBarChart.html)

	It uses *SVG* to render a simple bar chart.  

	Using your code editor experiment/change some of the values, colours, etc. to see the outcome

1.	Modify the code in ``svgBarChart.html`` so that bar chart looks like this:

	![img](../images/barChart2.png)

	Set the ``<svg>`` width to 300.
x
1.	Create a file ``svgCircles.html`` to render this:

	![img](../images/svgCircles.png)

	The diameter of the circles are shown in the text values inside the circle.  Set the ``<svg>`` height to 300.

1.	Create a file ``svgColumnChart.html`` for a new SVG rendered *column chart* like this:

	![img](../images/columnChart1.png)

	Set the ``<svg>`` height to 300.


## Part 2

1.  Examine the code in `svgBarChart2.html` and `svgBarChart2.js` below that uses SVG to render a simple bar chart dynamically using JavaScript.  

    ```html
    <!-- svgBarChart2.html -->
    <html>
    <head>
    <script type="text/javascript" src="svgBarChart2.js"></script>
    </head>
    <body>

    <svg id="chart"></svg>

    </body>
    </html>

    ```

    ```javascript
    // svgBarChart2.js
    var data = [100,200,300]; 

    window.onload = function() {
        document.getElementById('chart').setAttribute('width',300);
        document.getElementById('chart').setAttribute('height',data.length*60);

        for(var i=0;i<data.length;i++) {
            var rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
            rect.setAttribute('x',0);
            rect.setAttribute('y',i*60);
            rect.setAttribute('width',data[i]);
            rect.setAttribute('height',50);
            rect.setAttribute('fill','steelblue');
            document.getElementById('chart').appendChild(rect);
        }
    }

    ```

1.  Add another value to the ``data`` array and rerun the code.

1.	Create two files - `svgCircles2.html` and `svgCircles2.js` - that dynamically use JavaScript to create the circles below using this `data` array:

    ```javascript
    var data = [100,200,300]; 
    
    ```

    ![img](../images/svgCircles.png)

