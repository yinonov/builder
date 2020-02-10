import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
// import "jointjs/dist/joint.min.css";
// import "./styles.css";

import * as $ from "jquery";
import * as _ from "lodash";
// import * as Backbone from "backbone";
import * as joint from "jointjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("paper") paper: ElementRef;

  ngAfterViewInit() {
    var graph = new joint.dia.Graph();
    console.log(this.paper);

    var paper = new joint.dia.Paper({
        el: this.paper.nativeElement,
        model: graph,
        width: 800,
        height: 500,
        gridSize: 1,
        background: {
          color: 'lightgray'
       }
    });

    var rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
        body: {
            fill: 'blue'
        },
        label: {
            text: 'Hello',
            fill: 'white'
        }
    });
    rect.addTo(graph);

    var rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    var link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);

  }
}
