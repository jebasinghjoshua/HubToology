import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ResourceModel } from 'src/app/model/resource.model';
import { HupService } from 'src/app/service/hup.service';
import { LoadNetwork, actions } from 'src/app/actions/actions';
import { INFORMATION_WINDOW_ID } from 'src/app/actions/constant';

declare var mxUtils: any;
declare var mxCodec: any;
declare var mxGraph: any;
declare var mxConstants: any;

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  @ViewChild('graphContainer', { static: false }) graphContainer: ElementRef;
  @ViewChild('graphContainer1', { static: false }) graphContainer1: ElementRef;
  hideContainer1 = false;
  hideLoader = false;
  resourceModel: ResourceModel = null;
  clientIds: string[] = ['1', '2'];
  private updateSubscription: Subscription;
  selectedClientId = 1;
  isAutoRefreshChecked = false;
  graphLoading = false;
  refreshTime = '';
  cellStyleNotOnHover: string[] = ['JRmProH149STGmIK2Tsz-3', 'JRmProH149STGmIK2Tsz-1'];
  constructor(private hubService: HupService) {
    this.resourceModel = new ResourceModel();

  }

  ngOnInit(): void {
     this.getResourceByClientId(parseInt(this.clientIds[0]));
    //  this.updateSubscription = interval(8000).subscribe(
    //   (val) => {
    //     this.getResourceByClientId(this.selectedClientId);
    // });
  }

  setNetWorkGraph(resourceResponse) {
    this.hubService.getXml().subscribe(xmlString => {
      this.graphContainer.nativeElement.innerHTML = '';
      const graph = new mxGraph(this.graphContainer.nativeElement);
      function updateStyle(state, hover) {
          if (state.cell && ['JRmProH149STGmIK2Tsz-3', 'JRmProH149STGmIK2Tsz-1'].indexOf(state.cell.id) < 0) {
            state.style[mxConstants.STYLE_ROUNDED] = (hover) ? '1' : '0';
            state.style[mxConstants.STYLE_STROKEWIDTH] = (hover) ? '4' : '1';
            state.style[mxConstants.CURSOR_CONNECT] = (hover) ? 'pointer' : '';
          }
				}

				// Changes fill color to red on mouseover
				  graph.addMouseListener(
				{
				    currentState: null,
				    previousStyle: null,
				    mouseDown(me) {
				        if (this.currentState != null) {
				        	this.dragLeave(me.getEvent(), this.currentState);
				        	this.currentState = null;
				        }
				    },
				    mouseMove(me) {
				        if (this.currentState != null && me.getState() == this.currentState) {
				            return;
				        }

				        let tmp = graph.view.getState(me.getCell());

				        // Ignores everything but vertices
				        if (graph.isMouseDown || (tmp != null && !
				            graph.getModel().isVertex(tmp.cell))) {
				        	tmp = null;
				        }

				        if (tmp != this.currentState) {
				            if (this.currentState != null) {
				                this.dragLeave(me.getEvent(), this.currentState);
				            }

				            this.currentState = tmp;

				            if (this.currentState != null) {
				                this.dragEnter(me.getEvent(), this.currentState);
				            }
				        }
				    },
				    mouseUp() { },
				    dragEnter(state) {
				        if (state != null) {
				        	this.previousStyle = state.style;
				        	state.style = mxUtils.clone(state.style);
				        	updateStyle(state, true);

             if (state && state.shape) {
                    state.shape.apply(state);
				        	       state.shape.redraw();
                  }

				        	if (state.text != null) {
				        		state.text.apply(state);
				        		state.text.redraw();
				        	}
				        }
				    },
				    dragLeave(state) {
				        if (state != null) {
				        	state.style = this.previousStyle;
				        	updateStyle(state, false);

             if (state && state.shape) {
                    state.shape.apply(state);
				        	       state.shape.redraw();
                  }

				        	if (state.text != null) {
				        		state.text.apply(state);
				        		state.text.redraw();
				        	}
				        }
				    }
				});
      try {
         this.hideLoader = this.hideContainer1 = true;
         const doc = mxUtils.parseXml(xmlString);
         const codec = new mxCodec(doc);
         let elt = doc.documentElement.firstChild;
         const cells = [];
         while (elt != null) {
          const decodedCell = codec.decodeCell(elt);

          if (decodedCell) {
            cells.push(codec.decodeCell(elt));
            LoadNetwork(decodedCell, this.resourceModel);
            graph.refresh();
          }
          elt = elt.nextSibling;
        }
         graph.isHtmlLabel = () => true;
         graph.addCells(cells);

         graph.selectCellForEvent = function(cell) {

          const informationWindow = cells.find(cell => cell.id  === INFORMATION_WINDOW_ID);
          console.log(cell);
          actions(cell, informationWindow, resourceResponse);
          graph.refresh();
        };

         graph.refresh();

      } finally {
        graph.getModel().endUpdate();
      }
    });
  }

  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);

    this.hubService.getXml().subscribe(xmlString => {
      try {
        const doc = mxUtils.parseXml(xmlString);
        const codec = new mxCodec(doc);
        let elt = doc.documentElement.firstChild;
        const cells = [];
        while (elt != null) {
          const decodedCell = codec.decodeCell(elt);

          if (decodedCell) {
            cells.push(codec.decodeCell(elt));
            graph.refresh();
          }
          elt = elt.nextSibling;
        }
        graph.isHtmlLabel = () => true;
        graph.addCells(cells);
      } finally {
        graph.getModel().endUpdate();
      }
    });
  }

  clientOnChange(event) {
    this.hideLoader = false;
    this.getResourceByClientId(parseInt(event.target.value));
  }

  autoRefreshOnChange() {
    this.isAutoRefreshChecked = !this.isAutoRefreshChecked;
    if (!this.isAutoRefreshChecked) {
      this.updateSubscription.unsubscribe();
    } else { this.updateSubscription = interval(10000).subscribe(
      () => { this.getResourceByClientId(this.selectedClientId);
    }); }
  }

  getResourceByClientId(clientId: number) {
    this.graphLoading = true;
    this.hubService.getResource(clientId).subscribe(response => {
      this.refreshTime = this.getRefreshTime();
      this.graphLoading = false;
      this.resourceModel = response;
      this.setNetWorkGraph(response);
    });
  }

  getRefreshTime() {
    // tslint:disable-next-line: one-variable-per-declaration
    const currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // here we get the element with the id of "date" and change the content to the text variable we made above
    return text;
  }
}
