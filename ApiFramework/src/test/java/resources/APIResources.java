package resources;

public enum APIResources {

	
	AddAPI("/maps/api/place/add/json"),
	GETAPI("/maps/api/place/get/json"),
	DELETEAPI("/maps/api/place/delete/json"),
	UPDATEAPI("/maps/api/place/update/json");
	public String resources;

	APIResources(String resources) {
		this.resources = resources;
	}
	public String getresources() {
		
		return resources;
	}
	
	
}
