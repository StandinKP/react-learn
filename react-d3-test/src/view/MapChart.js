import React, { useEffect } from 'react';
import * as d3 from 'd3';
import '../App.css';
import { zoom } from 'd3-zoom';

const MultilineChart = ({ data }) => {
  // Code to add zoom functionality
  const Zoom = zoom().on('zoom', handleZoom);
  function handleZoom(e) {
    d3.select('svg g').attr('transform', e.transform);
  }
  function initZoom() {
    d3.select(ref.current).call(Zoom);
  }

  const ref = React.createRef();
  const { width, height } = {
    width: 960,
    height: 500,
  };
  const svgWidth = width;
  const svgHeight = height;

  useEffect(() => {
    draw();
  });

  const length = (path) => {
    return d3.create('svg:path').attr('d', path).node().getTotalLength();
  };

  // gridlines in x axis function
  const make_x_gridlines = (x) => {
    return d3.axisBottom(x).ticks(8);
  };

  // gridlines in y axis function
  const make_y_gridlines = (y) => {
    return d3.axisLeft(y).ticks(8);
  };

  const draw = () => {
    // this will draw svg
    const line = d3
      .line()
      .curve(d3.curveCatmullRom)
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', "url('../assets')")
      .append('g');

    initZoom();

    // this will draw x-axis
    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('stroke-width', 0) // this properties is use for hiding axis
      .call(d3.axisBottom(x))
      .selectAll('text')
      .remove();
    // this properties are use to hide label of x-axis and y-axis
    //  .selectAll("text")
    // .remove();

    // this will draw y-axis
    const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
    svg
      .append('g')
      .attr('stroke-width', 0)
      .call(d3.axisLeft(y))
      .selectAll('text')
      .remove();

    // add the X gridlines
    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + height + ')')
      .style('stroke-dasharray', '5, 5')
      .call(make_x_gridlines(x).tickSize(-height).tickFormat(''));

    // add the Y gridlines
    svg
      .append('g')
      .attr('class', 'grid')
      .style('stroke-dasharray', '5, 5')
      .call(make_y_gridlines(y).tickSize(-width).tickFormat(''));

    // this will draw line
    const l = length(line(data));
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#808080')
      .attr('stroke-width', 5)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-dasharray', `0,${l}`)
      .attr('d', line)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dasharray', `${l},${l}`);

    // this will create div tooltip
    const div = d3
      .select('#container')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // this will draw circle (will un-comment if required)
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .enter()
    //   .append("circle")
    //   .attr("cx", function (d) {
    //     return x(d.x);
    //   })
    //   .attr("cy", function (d) {
    //     return y(d.y);
    //   })
    //   .attr("r", "3")
    //   .style("fill", "#4d4d4d")
    //   .style("cursor", "pointer");

    // this will Add Text Labels
    svg
      .selectAll('labelText')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d.name)
      .attr('x', (d) => x(d.x))
      .attr('y', (d) => y(d.y))
      .attr('transform', `translate(-15, -15)`)
      .attr('font_family', 'sans-serif')
      .attr('font-size', '15px')
      .attr('font-style', 'bold')
      .attr('fill', 'darkgreen');

    // this will draw image with tooltip
    svg
      .selectAll('image')
      .data(data)
      .join('image')
      .attr('x', (d) => x(d.x))
      .attr('y', (d) => y(d.y))
      .attr('transform', `translate(-15, -15)`) // need to check
      .attr('href', (d) => {
        if (d.isEnabled) {
          return require('../assets/images/level.png')['default'];
        } else {
          return require('../assets/images/level-lock.png')['default'];
        }
      })
      .attr('height', '55px')
      .attr('width', '55px')
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => {
        div.transition().duration(1000).style('opacity', 0);
        if (d.isTooltip) {
          div.transition().duration(200).style('opacity', 0.9);
          div
            .html(`${d.tooltipText} to ${d.name}`)
            .style('left', event.pageX + 'px')
            .style('top', event.pageY - 28 + 'px')
            .append('a')
            .attr('href', 'https://google.com')
            .attr('target', '_blank')
            .append('p')
            .text('Welcome to level');
        }
      });
  };

  return (
    <div id="container" ref={ref} width={svgWidth} height={svgHeight}></div>
  );
};

export default MultilineChart;
