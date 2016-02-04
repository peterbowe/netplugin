//
// This file is auto generated by modelgen tool
// Do not edit this file manually

var AppSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var appListView = self.props.apps.map(function(app){
			return (
				<ModalTrigger modal={<AppModalView app={ app }/>}>
					<tr key={ app.key } className="info">
						
						  
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					  
					</tr>
				</thead>
				<tbody>
            		{ appListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var AppModalView = React.createClass({
	render() {
		var obj = this.props.app
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='App' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Application Name' ref='appName' defaultValue={obj.appName} placeholder='Application Name' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.AppSummaryView = AppSummaryView
module.exports.AppModalView = AppModalView
var EndpointGroupSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var endpointGroupListView = self.props.endpointGroups.map(function(endpointGroup){
			return (
				<ModalTrigger modal={<EndpointGroupModalView endpointGroup={ endpointGroup }/>}>
					<tr key={ endpointGroup.key } className="info">
						
						  
						<td>{ endpointGroup.groupName }</td>
						 
						<td>{ endpointGroup.networkName }</td>
						 
						<td>{ endpointGroup.policies }</td>
						 
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					  
						<th> Group name </th>  
						<th> Network </th>  
						<th> Policies </th>  
					</tr>
				</thead>
				<tbody>
            		{ endpointGroupListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var EndpointGroupModalView = React.createClass({
	render() {
		var obj = this.props.endpointGroup
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='EndpointGroup' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Group Identifier' ref='endpointGroupId' defaultValue={obj.endpointGroupId} placeholder='Group Identifier' />
			
				<Input type='text' label='Group name' ref='groupName' defaultValue={obj.groupName} placeholder='Group name' />
			
				<Input type='text' label='Network' ref='networkName' defaultValue={obj.networkName} placeholder='Network' />
			
				<Input type='text' label='Policies' ref='policies' defaultValue={obj.policies} placeholder='Policies' />
			
				<Input type='text' label='Tenant' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.EndpointGroupSummaryView = EndpointGroupSummaryView
module.exports.EndpointGroupModalView = EndpointGroupModalView
var GlobalSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var globalListView = self.props.globals.map(function(global){
			return (
				<ModalTrigger modal={<GlobalModalView global={ global }/>}>
					<tr key={ global.key } className="info">
						
						 
						<td>{ global.name }</td>
						 
						<td>{ global.network-infra-type }</td>
						  
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					 
						<th> name of this block </th>  
						<th> Network infrastructure type </th>   
					</tr>
				</thead>
				<tbody>
            		{ globalListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var GlobalModalView = React.createClass({
	render() {
		var obj = this.props.global
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Global' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='name of this block' ref='name' defaultValue={obj.name} placeholder='name of this block' />
			
				<Input type='text' label='Network infrastructure type' ref='network-infra-type' defaultValue={obj.network-infra-type} placeholder='Network infrastructure type' />
			
				<Input type='text' label='Allowed vlan range' ref='vlans' defaultValue={obj.vlans} placeholder='Allowed vlan range' />
			
				<Input type='text' label='Allwed vxlan range' ref='vxlans' defaultValue={obj.vxlans} placeholder='Allwed vxlan range' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.GlobalSummaryView = GlobalSummaryView
module.exports.GlobalModalView = GlobalModalView
var BgpSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var BgpListView = self.props.Bgps.map(function(Bgp){
			return (
				<ModalTrigger modal={<BgpModalView Bgp={ Bgp }/>}>
					<tr key={ Bgp.key } className="info">
						
						     
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					     
					</tr>
				</thead>
				<tbody>
            		{ BgpListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var BgpModalView = React.createClass({
	render() {
		var obj = this.props.Bgp
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Bgp' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='AS id' ref='as' defaultValue={obj.as} placeholder='AS id' />
			
				<Input type='text' label='host name' ref='hostname' defaultValue={obj.hostname} placeholder='host name' />
			
				<Input type='text' label='Bgp  neighbor' ref='neighbor' defaultValue={obj.neighbor} placeholder='Bgp  neighbor' />
			
				<Input type='text' label='AS id' ref='neighbor-as' defaultValue={obj.neighbor-as} placeholder='AS id' />
			
				<Input type='text' label='Bgp router intf ip' ref='routerip' defaultValue={obj.routerip} placeholder='Bgp router intf ip' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.BgpSummaryView = BgpSummaryView
module.exports.BgpModalView = BgpModalView
var NetworkSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var networkListView = self.props.networks.map(function(network){
			return (
				<ModalTrigger modal={<NetworkModalView network={ network }/>}>
					<tr key={ network.key } className="info">
						
						 
						<td>{ network.encap }</td>
						 
						<td>{ network.gateway }</td>
						 
						<td>{ network.networkName }</td>
						 
						<td>{ network.pktTag }</td>
						 
						<td>{ network.subnet }</td>
						 
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					 
						<th> Encapsulation </th>  
						<th> Gateway </th>  
						<th> Network name </th>  
						<th> Vlan/Vxlan Tag </th>  
						<th> Subnet </th>  
					</tr>
				</thead>
				<tbody>
            		{ networkListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var NetworkModalView = React.createClass({
	render() {
		var obj = this.props.network
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Network' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Encapsulation' ref='encap' defaultValue={obj.encap} placeholder='Encapsulation' />
			
				<Input type='text' label='Gateway' ref='gateway' defaultValue={obj.gateway} placeholder='Gateway' />
			
				<Input type='text' label='Network name' ref='networkName' defaultValue={obj.networkName} placeholder='Network name' />
			
				<Input type='text' label='Vlan/Vxlan Tag' ref='pktTag' defaultValue={obj.pktTag} placeholder='Vlan/Vxlan Tag' />
			
				<Input type='text' label='Subnet' ref='subnet' defaultValue={obj.subnet} placeholder='Subnet' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.NetworkSummaryView = NetworkSummaryView
module.exports.NetworkModalView = NetworkModalView
var PolicySummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var policyListView = self.props.policys.map(function(policy){
			return (
				<ModalTrigger modal={<PolicyModalView policy={ policy }/>}>
					<tr key={ policy.key } className="info">
						
						 
						<td>{ policy.policyName }</td>
						 
						<td>{ policy.tenantName }</td>
						
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					 
						<th> Policy Name </th>  
						<th> Tenant Name </th> 
					</tr>
				</thead>
				<tbody>
            		{ policyListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var PolicyModalView = React.createClass({
	render() {
		var obj = this.props.policy
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Policy' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Policy Name' ref='policyName' defaultValue={obj.policyName} placeholder='Policy Name' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.PolicySummaryView = PolicySummaryView
module.exports.PolicyModalView = PolicyModalView
var RuleSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var ruleListView = self.props.rules.map(function(rule){
			return (
				<ModalTrigger modal={<RuleModalView rule={ rule }/>}>
					<tr key={ rule.key } className="info">
						
						 
						<td>{ rule.action }</td>
						 
						<td>{ rule.direction }</td>
						 
						<td>{ rule.fromEndpointGroup }</td>
						 
						<td>{ rule.fromIpAddress }</td>
						 
						<td>{ rule.fromNetwork }</td>
						 
						<td>{ rule.policyName }</td>
						 
						<td>{ rule.port }</td>
						 
						<td>{ rule.priority }</td>
						 
						<td>{ rule.protocol }</td>
						 
						<td>{ rule.ruleId }</td>
						 
						<td>{ rule.tenantName }</td>
						 
						<td>{ rule.toEndpointGroup }</td>
						 
						<td>{ rule.toIpAddress }</td>
						 
						<td>{ rule.toNetwork }</td>
						
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					 
						<th> Action </th>  
						<th> Direction </th>  
						<th> From Endpoint Group </th>  
						<th> IP Address </th>  
						<th> From Network </th>  
						<th> Policy Name </th>  
						<th> Port No </th>  
						<th> Priority </th>  
						<th> Protocol </th>  
						<th> Rule Id </th>  
						<th> Tenant Name </th>  
						<th> To Endpoint Group </th>  
						<th> IP Address </th>  
						<th> To Network </th> 
					</tr>
				</thead>
				<tbody>
            		{ ruleListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var RuleModalView = React.createClass({
	render() {
		var obj = this.props.rule
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Rule' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Action' ref='action' defaultValue={obj.action} placeholder='Action' />
			
				<Input type='text' label='Direction' ref='direction' defaultValue={obj.direction} placeholder='Direction' />
			
				<Input type='text' label='From Endpoint Group' ref='fromEndpointGroup' defaultValue={obj.fromEndpointGroup} placeholder='From Endpoint Group' />
			
				<Input type='text' label='IP Address' ref='fromIpAddress' defaultValue={obj.fromIpAddress} placeholder='IP Address' />
			
				<Input type='text' label='From Network' ref='fromNetwork' defaultValue={obj.fromNetwork} placeholder='From Network' />
			
				<Input type='text' label='Policy Name' ref='policyName' defaultValue={obj.policyName} placeholder='Policy Name' />
			
				<Input type='text' label='Port No' ref='port' defaultValue={obj.port} placeholder='Port No' />
			
				<Input type='text' label='Priority' ref='priority' defaultValue={obj.priority} placeholder='Priority' />
			
				<Input type='text' label='Protocol' ref='protocol' defaultValue={obj.protocol} placeholder='Protocol' />
			
				<Input type='text' label='Rule Id' ref='ruleId' defaultValue={obj.ruleId} placeholder='Rule Id' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
				<Input type='text' label='To Endpoint Group' ref='toEndpointGroup' defaultValue={obj.toEndpointGroup} placeholder='To Endpoint Group' />
			
				<Input type='text' label='IP Address' ref='toIpAddress' defaultValue={obj.toIpAddress} placeholder='IP Address' />
			
				<Input type='text' label='To Network' ref='toNetwork' defaultValue={obj.toNetwork} placeholder='To Network' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.RuleSummaryView = RuleSummaryView
module.exports.RuleModalView = RuleModalView
var ServiceSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var serviceListView = self.props.services.map(function(service){
			return (
				<ModalTrigger modal={<ServiceModalView service={ service }/>}>
					<tr key={ service.key } className="info">
						
						            
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					            
					</tr>
				</thead>
				<tbody>
            		{ serviceListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var ServiceModalView = React.createClass({
	render() {
		var obj = this.props.service
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Service' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Application Name' ref='appName' defaultValue={obj.appName} placeholder='Application Name' />
			
				<Input type='text' label='' ref='command' defaultValue={obj.command} placeholder='' />
			
				<Input type='text' label='' ref='cpu' defaultValue={obj.cpu} placeholder='' />
			
				<Input type='text' label='' ref='endpointGroups' defaultValue={obj.endpointGroups} placeholder='' />
			
				<Input type='text' label='' ref='environment' defaultValue={obj.environment} placeholder='' />
			
				<Input type='text' label='' ref='imageName' defaultValue={obj.imageName} placeholder='' />
			
				<Input type='text' label='' ref='memory' defaultValue={obj.memory} placeholder='' />
			
				<Input type='text' label='' ref='networks' defaultValue={obj.networks} placeholder='' />
			
				<Input type='text' label='' ref='scale' defaultValue={obj.scale} placeholder='' />
			
				<Input type='text' label='Service Name' ref='serviceName' defaultValue={obj.serviceName} placeholder='Service Name' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
				<Input type='text' label='' ref='volumeProfile' defaultValue={obj.volumeProfile} placeholder='' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.ServiceSummaryView = ServiceSummaryView
module.exports.ServiceModalView = ServiceModalView
var ServiceInstanceSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var serviceInstanceListView = self.props.serviceInstances.map(function(serviceInstance){
			return (
				<ModalTrigger modal={<ServiceInstanceModalView serviceInstance={ serviceInstance }/>}>
					<tr key={ serviceInstance.key } className="info">
						
						     
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					     
					</tr>
				</thead>
				<tbody>
            		{ serviceInstanceListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var ServiceInstanceModalView = React.createClass({
	render() {
		var obj = this.props.serviceInstance
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='ServiceInstance' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='' ref='appName' defaultValue={obj.appName} placeholder='' />
			
				<Input type='text' label='Service instance id' ref='instanceId' defaultValue={obj.instanceId} placeholder='Service instance id' />
			
				<Input type='text' label='' ref='serviceName' defaultValue={obj.serviceName} placeholder='' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
				<Input type='text' label='' ref='volumes' defaultValue={obj.volumes} placeholder='' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.ServiceInstanceSummaryView = ServiceInstanceSummaryView
module.exports.ServiceInstanceModalView = ServiceInstanceModalView
var TenantSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var tenantListView = self.props.tenants.map(function(tenant){
			return (
				<ModalTrigger modal={<TenantModalView tenant={ tenant }/>}>
					<tr key={ tenant.key } className="info">
						
						  
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					  
					</tr>
				</thead>
				<tbody>
            		{ tenantListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var TenantModalView = React.createClass({
	render() {
		var obj = this.props.tenant
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Tenant' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='Network name' ref='defaultNetwork' defaultValue={obj.defaultNetwork} placeholder='Network name' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.TenantSummaryView = TenantSummaryView
module.exports.TenantModalView = TenantModalView
var VolumeSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var volumeListView = self.props.volumes.map(function(volume){
			return (
				<ModalTrigger modal={<VolumeModalView volume={ volume }/>}>
					<tr key={ volume.key } className="info">
						
						      
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					      
					</tr>
				</thead>
				<tbody>
            		{ volumeListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var VolumeModalView = React.createClass({
	render() {
		var obj = this.props.volume
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='Volume' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='' ref='datastoreType' defaultValue={obj.datastoreType} placeholder='' />
			
				<Input type='text' label='' ref='mountPoint' defaultValue={obj.mountPoint} placeholder='' />
			
				<Input type='text' label='' ref='poolName' defaultValue={obj.poolName} placeholder='' />
			
				<Input type='text' label='' ref='size' defaultValue={obj.size} placeholder='' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
				<Input type='text' label='Volume Name' ref='volumeName' defaultValue={obj.volumeName} placeholder='Volume Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.VolumeSummaryView = VolumeSummaryView
module.exports.VolumeModalView = VolumeModalView
var VolumeProfileSummaryView = React.createClass({
  	render: function() {
		var self = this

		// Walk thru all objects
		var volumeProfileListView = self.props.volumeProfiles.map(function(volumeProfile){
			return (
				<ModalTrigger modal={<VolumeProfileModalView volumeProfile={ volumeProfile }/>}>
					<tr key={ volumeProfile.key } className="info">
						
						      
					</tr>
				</ModalTrigger>
			);
		});

		return (
        <div>
			<Table hover>
				<thead>
					<tr>
					
					      
					</tr>
				</thead>
				<tbody>
            		{ volumeProfileListView }
				</tbody>
			</Table>
        </div>
    	);
	}
});

var VolumeProfileModalView = React.createClass({
	render() {
		var obj = this.props.volumeProfile
	    return (
	      <Modal {...this.props} bsStyle='primary' bsSize='large' title='VolumeProfile' animation={false}>
	        <div className='modal-body' style={ {margin: '5%',} }>
			
			
				<Input type='text' label='' ref='datastoreType' defaultValue={obj.datastoreType} placeholder='' />
			
				<Input type='text' label='' ref='mountPoint' defaultValue={obj.mountPoint} placeholder='' />
			
				<Input type='text' label='' ref='poolName' defaultValue={obj.poolName} placeholder='' />
			
				<Input type='text' label='' ref='size' defaultValue={obj.size} placeholder='' />
			
				<Input type='text' label='Tenant Name' ref='tenantName' defaultValue={obj.tenantName} placeholder='Tenant Name' />
			
				<Input type='text' label='Volume profile Name' ref='volumeProfileName' defaultValue={obj.volumeProfileName} placeholder='Volume profile Name' />
			
			</div>
	        <div className='modal-footer'>
				<Button onClick={this.props.onRequestHide}>Close</Button>
	        </div>
	      </Modal>
	    );
  	}
});

module.exports.VolumeProfileSummaryView = VolumeProfileSummaryView
module.exports.VolumeProfileModalView = VolumeProfileModalView