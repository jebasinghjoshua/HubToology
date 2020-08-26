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

export interface Claims {
    state: number;
}

export interface Billing {
    state: number;
}

export interface Policy {
    state: number;
}

export interface Party {
    state: number;
}

export interface Insights {
    state: number;
}

export interface Producer {
    state: number;
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
    claims: Claims;
    billing: Billing;
    policy: Policy;
    party: Party;
    insights: Insights;
    producer: Producer;
}