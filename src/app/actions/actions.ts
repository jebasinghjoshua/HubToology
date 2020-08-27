import { AZURE_SEARCH_IDS, AZURE_SERVICE_BUS, INSIGHT_DB_SERVER, DB_SERVER, APP_SERVER, OCTOPUS_SERVER, PRODUCT_APP_SERVER, CLAIMS_IDS, BILLING_IDS, POLICY_IDS, PARTY_IDS, INSIGTS_IDS, PRODUCERS_IDS, VIRTUAL_NETWORK_NAME_ID, VIRTUAL_NETWORK_IP_ADDRESS_ID, VIRTUAL_NETWORK_STATUS_ID, PRODUCERS_NETWORK_VERTEX_ID, INSIGHTDB_NETWORK_VERTEX_ID } from './constant';
import { ResourceModel } from '../model/resource.model';
import { TagContentType } from '@angular/compiler';

export const AZURE_SEARCH_CLICKED = 'AZURE_SEARCH_CLICKED';
export const AZURE_SEARCH_CELL_ID = 'JRmProH149STGmIK2Tsz-22';
declare var mxConstants: any;
const state: {[key:string]: string} = {
    '0': 'shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=https://cdn4.iconfinder.com/data/icons/24x24-free-application-icons/24/Error.png',
    '1': 'shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=https://cdn4.iconfinder.com/data/icons/momenticons-basic/32x32/accept1.png'
}
const resourceState: {[key:string]: string} = {
    '0': 'shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=assets/images/ErrorWarning.gif;',
    '1': 'shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=https://cdn4.iconfinder.com/data/icons/momenticons-basic/32x32/accept1.png'
};
export class TableProperties {
    name?: string;
    resourceGroup?: string;
    customerID?: string;
    location?: string;
    vmSize?: string;
    diskSizeGB?: string;
    schedule?: string;
    skuName?: string;
}

const getTable = (tableProperties: TableProperties) => {
    let font = '<font style="font-size: 14px">';
    const tdhtml = '<td style="width:40%;font-weight: bold; border: 0px solid #CCC; height: 20px; background: #FAFAFA; text-align: left;">';
    const tdValuehtml = '<td style="width:60%;border: 0px solid #CCC; height: 20px; background: #FAFAFA; text-align: left;">';
    const tdClose = '</td>';
    let table = '<table>';
    table += '<tbody>';

    if (tableProperties.name) {
        table += '<tr>';
        table += tdhtml + 'Name' + tdClose;
        table += tdValuehtml + tableProperties.name.toUpperCase() + tdClose;
        table += '</tr>';
    }

    if (tableProperties.resourceGroup) {
        table += '<tr>';
        table += tdhtml + 'Resource Group' + tdClose;
        table += tdValuehtml + tableProperties.resourceGroup + tdClose;
        table += '</tr>';
    }

    // if (tableProperties.customerID)
    // {
    //     table += "<tr>";
    //         table += "<td>" + "Customer ID" + tdClose;
    //         table += "<td>" + tableProperties.customerID + tdClose;
    //     table += "</tr>";
    // }

    if (tableProperties.location) {
        table += '<tr>';
        table += tdhtml + 'Location' + tdClose;
        table += tdValuehtml + tableProperties.location + tdClose;
        table += '</tr>';
    }
    if (tableProperties.skuName) {
        table += '<tr>';
        table += tdhtml + 'Sku' + tdClose;
        table += tdValuehtml + tableProperties.skuName + tdClose;
        table += '</tr>';
    }

    if (tableProperties.vmSize) {
        table += '<tr>';
        table += tdhtml + 'VM Size' + tdClose;
        table += tdValuehtml + tableProperties.vmSize + tdClose;
        table += '</tr>';
    }

    if (tableProperties.diskSizeGB) {
        table += '<tr>';
        table += tdhtml + 'Disk Size' + tdClose;
        table += tdValuehtml + tableProperties.diskSizeGB + ' GB' + tdClose;
        table += '</tr>';
    }

    if (tableProperties.schedule) {
        table += '<tr>';
        table += tdhtml + 'Schedule' + tdClose;
        table += tdValuehtml + tableProperties.schedule + tdClose;
        table += '</tr>';
    }

    // table += "<tr>";
    // table += "<td>";
    // table += "<button>Start</button>";
    // table += "</td>";
    // table += "</tr>"

    table += '</tbody>';
    table += '</table>';

    font += table;
    font += '</font>';

    return font;
}




export const actions = (cell, informationWindow, resourceModel: ResourceModel) => {
    if (AZURE_SEARCH_IDS.indexOf(cell.id) >= 0) {
         const tableProp: TableProperties = {
            name: resourceModel.seachService.name,
            customerID: resourceModel.seachService.tenantId,
            location: resourceModel.seachService.location,
            resourceGroup: resourceModel.seachService.resourceGroup,
            skuName : resourceModel.seachService.skuName,
        }

         let strTable = getTable(tableProp);
         informationWindow.setValue(strTable);
    } else if (AZURE_SERVICE_BUS.indexOf(cell.id) >= 0) {
        const tableProp: TableProperties = {
            name: resourceModel.serviceBus.name,
            customerID: resourceModel.serviceBus.tenantId,
            location: resourceModel.serviceBus.location,
            resourceGroup: resourceModel.serviceBus.resourceGroup,
            skuName : resourceModel.seachService.skuName,
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if (INSIGHT_DB_SERVER.indexOf(cell.id) >= 0) {     
        console.log('INSIGHT_DB_SERVER Server Clicked');

        const tableProp: TableProperties = {
            name: resourceModel.insightsVirtualMachine.name,
            customerID: resourceModel.insightsVirtualMachine.tenantId,
            location: resourceModel.insightsVirtualMachine.location,
            resourceGroup: resourceModel.insightsVirtualMachine.resourceGroup,
            diskSizeGB: resourceModel.insightsVirtualMachine.diskSizeGB,
            schedule: resourceModel.insightsVirtualMachine.schedule,
            vmSize: resourceModel.insightsVirtualMachine.vmSize
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if(DB_SERVER.indexOf(cell.id) >= 0) {
        console.log('DB Server Clicked');

        const tableProp: TableProperties = {
            name: resourceModel.dbServerVirtualMachine.name,
            customerID: resourceModel.dbServerVirtualMachine.tenantId,
            location: resourceModel.dbServerVirtualMachine.location,
            resourceGroup: resourceModel.dbServerVirtualMachine.resourceGroup,
            diskSizeGB: resourceModel.dbServerVirtualMachine.diskSizeGB,
            schedule: resourceModel.dbServerVirtualMachine.schedule,
            vmSize: resourceModel.dbServerVirtualMachine.vmSize
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if(OCTOPUS_SERVER.indexOf(cell.id) >= 0) {
        console.log('Octopus Server Clicked');

        const tableProp: TableProperties = {
            name: resourceModel.octopusVirtualMachine.name,
            customerID: resourceModel.octopusVirtualMachine.tenantId,
            location: resourceModel.octopusVirtualMachine.location,
            resourceGroup: resourceModel.octopusVirtualMachine.resourceGroup,
            diskSizeGB: resourceModel.octopusVirtualMachine.diskSizeGB,
            schedule: resourceModel.octopusVirtualMachine.schedule,
            vmSize: resourceModel.octopusVirtualMachine.vmSize
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if(APP_SERVER.indexOf(cell.id) >= 0) {
        console.log('APP Server Clicked');

        const tableProp: TableProperties = {
            name: resourceModel.appServerVirtualMachine.name,
            customerID: resourceModel.appServerVirtualMachine.tenantId,
            location: resourceModel.appServerVirtualMachine.location,
            resourceGroup: resourceModel.appServerVirtualMachine.resourceGroup,
            diskSizeGB: resourceModel.appServerVirtualMachine.diskSizeGB,
            schedule: resourceModel.appServerVirtualMachine.schedule,
            vmSize: resourceModel.appServerVirtualMachine.vmSize
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if(PRODUCT_APP_SERVER.indexOf(cell.id) >= 0) {
        console.log('Product APP Server Clicked');

        const tableProp: TableProperties = {
            name: resourceModel.producerVirtualMachine.name,
            customerID: resourceModel.producerVirtualMachine.tenantId,
            location: resourceModel.producerVirtualMachine.location,
            resourceGroup: resourceModel.producerVirtualMachine.resourceGroup,
            diskSizeGB: resourceModel.producerVirtualMachine.diskSizeGB,
            schedule: resourceModel.producerVirtualMachine.schedule,
            vmSize: resourceModel.producerVirtualMachine.vmSize
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    } else if(CLAIMS_IDS.indexOf(cell.id) >= 0) {
        console.log('Cliams Clicked');
    } else if(BILLING_IDS.indexOf(cell.id) >= 0) {
        console.log('Billing Clicked');
    } else if (POLICY_IDS.indexOf(cell.id) >= 0) {
        console.log('Policy Clicked');
    } else if (PARTY_IDS.indexOf(cell.id) >= 0) {
        console.log('Party Clicked');
    } else if (INSIGTS_IDS.indexOf(cell.id) >= 0) {
        console.log('Insights Clicked');
    } else if (PRODUCERS_IDS.indexOf(cell.id) >= 0) {
        console.log('Producers Clicked');
    } else {
        console.log(cell.id);
    }
}

export const LoadNetwork = (cell, resourceModel: ResourceModel) => {
    if (cell.id == AZURE_SEARCH_IDS[0]) {
        cell.value = `(${resourceModel.seachService.name.toUpperCase()})`;
    } else if(cell.id == AZURE_SERVICE_BUS[0]) {
        cell.value = `(${resourceModel.serviceBus.name.toUpperCase()})`;
    } else if(cell.id == INSIGHT_DB_SERVER[0]) {
        cell.value = `(${resourceModel.insightsVirtualMachine.name.toUpperCase()})`;
    } else if(cell.id == DB_SERVER[0]) {
        cell.value = `(${resourceModel.dbServerVirtualMachine.name.toUpperCase()})`;
    } else if(cell.id == OCTOPUS_SERVER[0]) {
        cell.value = `(${resourceModel.octopusVirtualMachine.name.toUpperCase()})`;
    } else if(cell.id == APP_SERVER[0]) {
        cell.value = `(${resourceModel.appServerVirtualMachine.name.toUpperCase()})`;
    } else if(cell.id == PRODUCT_APP_SERVER[0]) {
        cell.value = `(${resourceModel.producerVirtualMachine.name.toUpperCase()})`;
    } else if(cell.id == VIRTUAL_NETWORK_NAME_ID) {
        cell.value = `(${resourceModel.virtualNetwork.name.toUpperCase()})`;
    } else if(cell.id == VIRTUAL_NETWORK_IP_ADDRESS_ID) {
        cell.value = `(${resourceModel.virtualNetwork.addressPrefix})`;
    } else if(cell.id == AZURE_SEARCH_IDS[1] && resourceModel.seachService ) {
        cell.style = resourceState[resourceModel.seachService.status.toLowerCase() == 'running' ? '1' : '0'];
    } else if(cell.id == AZURE_SERVICE_BUS[1] && resourceModel.serviceBus ) {
        cell.style = resourceState[resourceModel.serviceBus.status.toLowerCase() == 'active' ? '1' : '0'];
    } else if(cell.id == INSIGHT_DB_SERVER[1] && resourceModel.insightsVirtualMachine) {
        cell.style = resourceState[resourceModel.insightsVirtualMachine.state];
    } else if(cell.id == DB_SERVER[1] && resourceModel.dbServerVirtualMachine ) {
        cell.style = resourceState[resourceModel.dbServerVirtualMachine.state];
    } else if(cell.id == OCTOPUS_SERVER[1] && resourceModel.octopusVirtualMachine ) {
        cell.style = resourceState[resourceModel.octopusVirtualMachine.state];
    } else if(cell.id == APP_SERVER[1] && resourceModel.appServerVirtualMachine ) {
        cell.style = resourceState[resourceModel.appServerVirtualMachine.state];
    } else if(cell.id == PRODUCT_APP_SERVER[1] && resourceModel.producerVirtualMachine) {
        cell.style = resourceState[resourceModel.producerVirtualMachine.state];
    } else if(cell.id == CLAIMS_IDS[0] && resourceModel.claims) {
        cell.style = state[resourceModel.claims.state.toString()];
    } else if(cell.id == BILLING_IDS[0] && resourceModel.billing) {
        cell.style = state[resourceModel.billing.state.toString()];
    } else if(cell.id == POLICY_IDS[0] && resourceModel.policy) {
        cell.style = state[resourceModel.policy.state.toString()];
    } else if(cell.id == PARTY_IDS[0] && resourceModel.party) {
        cell.style = state[resourceModel.party.state.toString()];
    } else if(cell.id == INSIGTS_IDS[0] && resourceModel.insights) {
        cell.style = state[resourceModel.insights.state.toString()];
    } else if(cell.id == PRODUCERS_IDS[0] && resourceModel.producer) {
        cell.style = state[resourceModel.producer.state.toString()];
    }

    if (PRODUCERS_IDS.indexOf(cell.id) >= 0 && !resourceModel.producer) {
        cell.setVisible(false);
    }

    if ((PRODUCT_APP_SERVER.indexOf(cell.id) >= 0 || cell.id == PRODUCERS_NETWORK_VERTEX_ID) && !resourceModel.producerVirtualMachine.vmSize) {
        cell.setVisible(false);
    }

    if ((INSIGHT_DB_SERVER.indexOf(cell.id) >= 0 || cell.id == INSIGHTDB_NETWORK_VERTEX_ID) && !resourceModel.insightsVirtualMachine.vmSize) {
        cell.setVisible(false);
    }

    if (INSIGTS_IDS.indexOf(cell.id) >= 0 && !resourceModel.insights) {
        cell.setVisible(false);
    }
}

