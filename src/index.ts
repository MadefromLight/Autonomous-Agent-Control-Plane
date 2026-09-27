export interface ActionEnvelope {id:string;agent:{id:string;version?:string};action:{name:string;resource:string;input?:Record<string,unknown>};context?:Record<string,unknown>;requestedAt:string;}
export interface PolicyDecision {allowed:boolean;effect:"allow"|"deny";policyId:string;policyVersion:string;reasons:string[];}
export interface EvidencePointer {id:string;hash:string;schema:string;}
export interface ControlResult {actionId:string;decision:PolicyDecision;evidence?:EvidencePointer;}
export function createEnvelope(agentId:string,action:string,resource:string,input?:Record<string,unknown>):ActionEnvelope{return {id:crypto.randomUUID(),agent:{id:agentId},action:{name:action,resource,input},requestedAt:new Date().toISOString()};}
