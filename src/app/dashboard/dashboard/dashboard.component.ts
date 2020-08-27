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
          actions(cell, informationWindow, resourceResponse);
          graph.refresh();

          const emages = document.querySelectorAll('[*|href]:not([href])');
          emages.forEach(function(image){
            image.addEventListener('mouseover', function() {
              ( image as HTMLElement).style.cursor = 'pointer';
            });
          });
        };

         graph.refresh();

      } finally {
        graph.getModel().endUpdate();
      }
      this.setHoverStyleOnImage();
      console.log(12);
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
  onRefresh() {
    this.getResourceByClientId(this.selectedClientId);
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

  setHoverStyleOnImage() {
    const emages = document.querySelectorAll('[*|href]:not([href])');
    emages.forEach(function(image){
      image.addEventListener('mouseover', function() {
        ( image as HTMLElement).style.cursor = 'pointer';
      });
    });
  }
}
