export interface AppServerVirtualMachine {
    state: number;
    vmSize: string;
    diskSizeGB: string;
    osSizeGB: string;
    environment: string;
    customerID: string;
    purpose: string;
    scheduled_Downtime: string;
    schedule: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface DbServerVirtualMachine {
    state: number;
    vmSize: string;
    diskSizeGB: string;
    osSizeGB: string;
    environment: string;
    customerID: string;
    purpose: string;
    scheduled_Downtime: string;
    schedule: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface OctopusVirtualMachine {
    state: number;
    vmSize: string;
    diskSizeGB: string;
    osSizeGB: string;
    environment: string;
    customerID: string;
    purpose: string;
    scheduled_Downtime: string;
    schedule: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface InsightsVirtualMachine {
    state: number;
    vmSize: string;
    diskSizeGB: string;
    osSizeGB: string;
    environment: string;
    customerID: string;
    purpose: string;
    scheduled_Downtime: string;
    schedule: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface ProducerVirtualMachine {
    state: number;
    vmSize: string;
    diskSizeGB: string;
    osSizeGB: string;
    environment: string;
    customerID: string;
    purpose: string;
    scheduled_Downtime: string;
    schedule: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface SeachService {
    skuName: string;
    status: string;
    publicNetworkAccess: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface ServiceBus {
    skuName: string;
    skuTier: string;
    status: string;
    endpoint: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export interface VirtualNetwork {
    addressPrefix: string;
    name: string;
    resourceGroup: string;
    location: string;
    type: string;
    tenantId: string;
}

export class ResourceModel {
    appServerVirtualMachine: AppServerVirtualMachine;
    dbServerVirtualMachine: DbServerVirtualMachine;
    octopusVirtualMachine: OctopusVirtualMachine;
    insightsVirtualMachine: InsightsVirtualMachine;
    producerVirtualMachine: ProducerVirtualMachine;
    seachService: SeachService;
    serviceBus: ServiceBus;
    virtualNetwork: VirtualNetwork;
}