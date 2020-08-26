import { AZURE_SEARCH_IDS, AZURE_SERVICE_BUS, INSIGHT_DB_SERVER, DB_SERVER, APP_SERVER, OCTOPUS_SERVER, PRODUCT_APP_SERVER, CLAIMS_IDS, BILLING_IDS, POLICY_IDS, PARTY_IDS, INSIGTS_IDS, PRODUCERS_IDS, VIRTUAL_NETWORK_NAME_ID, VIRTUAL_NETWORK_IP_ADDRESS_ID, VIRTUAL_NETWORK_STATUS_ID } from './constant';
import { ResourceModel } from '../model/resource.model';
import { TagContentType } from '@angular/compiler';

export const AZURE_SEARCH_CLICKED = "AZURE_SEARCH_CLICKED";
export const AZURE_SEARCH_CELL_ID = "JRmProH149STGmIK2Tsz-22";

const state: {[key:string]: string} = {
    "0": "shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=https://cdn4.iconfinder.com/data/icons/24x24-free-application-icons/24/Error.png",
    "1": "shape=image;html=1;verticalAlign=top;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;aspect=fixed;image=https://cdn4.iconfinder.com/data/icons/momenticons-basic/32x32/accept1.png"
}

export class TableProperties
{
    name?: string;
    resourceGroup?: string;
    customerID?: string;
    location?: string;
    vmSize?: string;
    diskSizeGB?: string;
    schedule?: string;
}

const getTable = (tableProperties: TableProperties) =>
{
    let font = "<font style=\"font-size: 14px\">";

    let table = "<table>";
    table += "<tbody>";

    if (tableProperties.name)
    {
        table += "<tr>";
            table += "<td>" + "Name" + "</td>";
            table += "<td>" + tableProperties.name.toUpperCase() + "</td>";
        table += "</tr>";
    }

    if (tableProperties.resourceGroup)
    {
        table += "<tr>";
            table += "<td>" + "Resource Group" + "</td>";
            table += "<td>" + tableProperties.resourceGroup + "</td>";
        table += "</tr>";
    }

    if (tableProperties.customerID)
    {
        table += "<tr>";
            table += "<td>" + "Customer ID" + "</td>";
            table += "<td>" + tableProperties.customerID + "</td>";
        table += "</tr>";
    }

    if (tableProperties.location)
    {
        table += "<tr>";
            table += "<td>" + "Location" + "</td>";
            table += "<td>" + tableProperties.location + "</td>";
        table += "</tr>";
    }

    if (tableProperties.vmSize)
    {
        table += "<tr>";
            table += "<td>" + "VM Size" + "</td>";
            table += "<td>" + tableProperties.vmSize + "</td>";
        table += "</tr>";
    }

    if (tableProperties.diskSizeGB)
    {
        table += "<tr>";
            table += "<td>" + "Disk Size" + "</td>";
            table += "<td>" + tableProperties.diskSizeGB + " GB" + "</td>";
        table += "</tr>";
    }

    if (tableProperties.schedule)
    {
        table += "<tr>";
            table += "<td>" + "Schedule" + "</td>";
            table += "<td>" + tableProperties.schedule + "</td>";
        table += "</tr>";
    }

    // table += "<tr>";
    // table += "<td>";
    // table += "<button>Start</button>";
    // table += "</td>";
    // table += "</tr>"

    table += "</tbody>";
    table += "</table>";

    font += table;
    font += "</font>";

    return font;
}




export const actions = (cell, informationWindow, resourceModel: ResourceModel) => {
    if (AZURE_SEARCH_IDS.indexOf(cell.id) >= 0) {
         const tableProp: TableProperties = {
            name: resourceModel.seachService.name,
            customerID: resourceModel.seachService.tenantId,
            location: resourceModel.seachService.location,
            resourceGroup: resourceModel.seachService.resourceGroup
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    }
    else if (AZURE_SERVICE_BUS.indexOf(cell.id) >= 0) {
        console.log("AZURE_SERVICE_BUS Server Clicked");

        const tableProp: TableProperties = {
            name: resourceModel.serviceBus.name,
            customerID: resourceModel.serviceBus.tenantId,
            location: resourceModel.serviceBus.location,
            resourceGroup: resourceModel.serviceBus.resourceGroup
        }

        let strTable = getTable(tableProp);
        informationWindow.setValue(strTable);
    }
    else if (INSIGHT_DB_SERVER.indexOf(cell.id) >= 0) {     
        console.log("INSIGHT_DB_SERVER Server Clicked");

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
    }
    else if(DB_SERVER.indexOf(cell.id) >= 0)
    {
        console.log("DB Server Clicked");

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
    }
    else if(OCTOPUS_SERVER.indexOf(cell.id) >= 0)
    {
        console.log("Octopus Server Clicked");

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
    }
    else if(APP_SERVER.indexOf(cell.id) >= 0)
    {
        console.log("APP Server Clicked");

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
    }
    else if(PRODUCT_APP_SERVER.indexOf(cell.id) >= 0)
    {
        console.log("Product APP Server Clicked");

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
    }
    else if(CLAIMS_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Cliams Clicked");
    }
    else if(BILLING_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Billing Clicked");
    }
    else if (POLICY_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Policy Clicked");
    }
    else if (PARTY_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Party Clicked");
    }
    else if (INSIGTS_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Insights Clicked");
    }
    else if (PRODUCERS_IDS.indexOf(cell.id) >= 0)
    {
        console.log("Producers Clicked");
    }
    else {
        console.log(cell.id);
    }
}

export const LoadNetwork = (cell, resourceModel: ResourceModel) =>
{
    if (cell.id == AZURE_SEARCH_IDS[0])
    {
        cell.value = `(${resourceModel.seachService.name.toUpperCase()})`;
    }
    else if(cell.id == AZURE_SERVICE_BUS[0]){
        cell.value = `(${resourceModel.serviceBus.name.toUpperCase()})`;
    }
    else if(cell.id == INSIGHT_DB_SERVER[0]){
        cell.value = `(${resourceModel.insightsVirtualMachine.name.toUpperCase()})`;
    }
    else if(cell.id == DB_SERVER[0]){
        cell.value = `(${resourceModel.dbServerVirtualMachine.name.toUpperCase()})`;
    }
    else if(cell.id == OCTOPUS_SERVER[0]){
        cell.value = `(${resourceModel.octopusVirtualMachine.name.toUpperCase()})`;
    }
    else if(cell.id == APP_SERVER[0]){
        cell.value = `(${resourceModel.appServerVirtualMachine.name.toUpperCase()})`;
    }
    else if(cell.id == PRODUCT_APP_SERVER[0]){
        cell.value = `(${resourceModel.producerVirtualMachine.name.toUpperCase()})`;
    }
    else if(cell.id == VIRTUAL_NETWORK_NAME_ID)
    {
        cell.value = `(${resourceModel.virtualNetwork.name.toUpperCase()})`;
    }
    else if(cell.id == VIRTUAL_NETWORK_IP_ADDRESS_ID)
    {
        cell.value = `(${resourceModel.virtualNetwork.addressPrefix})`;
    }
    
    else if(cell.id == AZURE_SEARCH_IDS[1]){
        cell.style = state[resourceModel.seachService.status.toLowerCase() == "running" ? "1" : "0"];
    }
    else if(cell.id == AZURE_SERVICE_BUS[1]){
        cell.style = state[resourceModel.serviceBus.status.toLowerCase() == "active" ? "1" : "0"];
    }
    else if(cell.id == INSIGHT_DB_SERVER[1]){
        cell.style = state[resourceModel.insightsVirtualMachine.state];
    }
    else if(cell.id == DB_SERVER[1]){
        cell.style = state[resourceModel.dbServerVirtualMachine.state];
    }
    else if(cell.id == OCTOPUS_SERVER[1]){
        cell.style = state[resourceModel.octopusVirtualMachine.state];
    }
    else if(cell.id == APP_SERVER[1]){
        cell.style = state[resourceModel.appServerVirtualMachine.state];
    }
    else if(cell.id == PRODUCT_APP_SERVER[1]){
        cell.style = state[resourceModel.producerVirtualMachine.state];
    }
    else if(cell.id == CLAIMS_IDS[0]){
        cell.style = state[resourceModel.claims.state.toString()];
    }
    else if(cell.id == BILLING_IDS[0]){
        cell.style = state[resourceModel.billing.state.toString()];
    }
    else if(cell.id == POLICY_IDS[0]){
        cell.style = state[resourceModel.policy.state.toString()];
    }
    else if(cell.id == PARTY_IDS[0]){
        cell.style = state[resourceModel.party.state.toString()];
    }
    else if(cell.id == INSIGTS_IDS[0]){
        cell.style = state[resourceModel.insights.state.toString()];
    }
    else if(cell.id == PRODUCERS_IDS[0]){
        cell.style = state[resourceModel.producer.state.toString()];
    }
}

