import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HupService } from './service/hup.service';
import { actions, LoadNetwork } from './actions/actions';
import { INFORMATION_WINDOW_ID} from './actions/constant';
import { ResourceModel } from './model/resource.model';
import { Subscription, interval } from 'rxjs';

declare var mxUtils: any;
declare var mxCodec: any;
declare var mxGraph: any;
declare var mxGraphModel: any;
declare var mxGeometry: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
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
         graph.isHtmlLabel = (cell: any) => true;
         graph.addCells(cells);

         graph.selectCellForEvent = function(cell, evt) {

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
        graph.isHtmlLabel = (cell: any) => true;
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

  autoRefreshOnChange(event) {
    this.isAutoRefreshChecked = !this.isAutoRefreshChecked;
    // if (!this.isAutoRefreshChecked) {
    //   this.updateSubscription.unsubscribe();
    // } else { this.updateSubscription = interval(2000).subscribe(
    //   (val) => { this.getResourceByClientId(this.selectedClientId);
    // }); }
  }

  getResourceByClientId(clientId: number) {
    this.graphLoading = true;
    this.hubService.getResource(clientId).subscribe(response => {
      this.graphLoading = false;
      this.resourceModel = response;
      this.setNetWorkGraph(response);
    });
  }
}
