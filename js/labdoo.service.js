var labdoo = labdoo || {};
$(function(){

    labdoo.node = labdoo.node || {};
    labdoo.service = labdoo.service || {};
    labdoo.service.user = labdoo.service.user || {};
    labdoo.service.node = labdoo.service.node || {};
    
    /*
     * list params
	 * -----------
	 * "title"
	 * "location"
	 * "field_how_did_you_learn"
	 * "field_current_manager"
	 * "field_model"
	 * "field_cpu"
	 * "field_cpu_type"
	 * "field_memory"
	 * "field_hard_drive integer"
	 * "field_current_os"
	 * "field_destination"
	 * "field_501c3_recipient"
	 * "field_laptop_domain"
	 * "field_status"
	 * "field_dev_type"
	 * "field_library_notification"
	 * "field_checkedout_location"
	 * "field_notes"
	 * "field_laptop_serial_number"
	 * "field_date_received"
	 * "field_date_delivered"
	 * "field_available_day"
	 * "field_date_recycled"
     */
//    labdoo.init = function(node){
//        console.log(typeof node)
//    }
    
    labdoo.node = function(node){
        return{
            init:function(){
                prototype = new Object;
		        prototype.title             = node.title;
		        prototype.location          = node.location;
		        prototype.how_did_you_learn = node.how_did_you_learn;
		        prototype.current_manager   = node.manager;
		        return prototype;
            }
        }
    }
    
	/*
	 * command = "user.login"
	 * input = List<String> where it includes: user and pass
	 * output = None
	 */
	labdoo.service.user.login = function(username,password){
	    console.log('login');
	}
	
	/*
	 * METHOD_USER_LOGOUT
	 * command = "user.logout"
	 * input = None
	 * output = None
	 */
	labdoo.service.user.logout = function(){
	   console.log('logout');
	}
	
	/*
	 * METHOD_NODE_RETRIEVE 
     * command= "node.retrieve"
     * input = List<Object>
     * Map<String,Object> with elemn ("nid",num)
     * output = Map with  all the node info
	 */
	labdoo.service.node.retrieve = function(nid){
       console.log('node.retrieve:'+nid);
    }
    
    /*
     * METHOD_NODE_DELETE
     * command = "node.delete"
     * input = List<Object>
     * Map<String,Object> with elemn ("nid",num)
     * output =  None
     */
    labdoo.service.node.delete = function(nid){
       console.log(nid);
    }
    
    /*
     * METHOD_NODE_CREATE
     * command = "node.create"
     * input = Map<String,Object> with all new updated params (Map<Parameter from list params, value param> check "list params")
     * output = Map<String,Object> with elemn ("nid",num)
     */
    labdoo.service.node.create = function(labdoo){
       console.log(labdoo);
    }

    /*
     * METHOD_NODE_UPDATE 
     * command= "node.update"
     * input = Map<String,Object> with all new updated params (Map<Parameter from list params, value param> check "list params")
     * output = None
     */
    labdoo.service.node.update = function(labdoo){
       console.log(labdoo);
    } 
    
    /*
     * METHOD_NODE_LIST
     * command = "node.list"
     * input =  Map<String, String> filters where it is (<nameFilter,value>, f.e <"status","STATE_S2") 
     * output = Map<String,Map<String, Object>> (what it is Map<id node, Map<Parameter from list params, value param>
     */
    labdoo.service.node.list = function(key, value){
       console.log(key);
       console.log(value);
    }
    
    test = new Object;
    test.title = 'hello';
    test.body = 'Hello World';
    
    mylabdoo = new labdoo.node(test);
    mylabdoo_node = mylabdoo.init();
    
	labdoo.service.user.login('username','password');
	labdoo.service.user.logout();
    labdoo.service.node.retrieve('3');
    labdoo.service.node.delete('3');
    labdoo.service.node.create(mylabdoo_node);
    labdoo.service.node.update(mylabdoo_node);
    var filter = 'title';
    var filter_value = 'hello';
    labdoo.service.node.list(filter,filter_value);

    
});