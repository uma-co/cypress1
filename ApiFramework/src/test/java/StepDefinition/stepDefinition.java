package StepDefinition;

import static io.restassured.RestAssured.given;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import static org.junit.Assert.*;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import pojo.addapipojo;
import pojo.location;

import resources.APIResources;
import resources.data;
import resources.utils;

public class stepDefinition extends utils {
	data data = new data();
	 Response  addreq1;
	RequestSpecification addreq ;
	 JsonPath js ;
	 data addData;
	public static String p_id;
	 String address;
	 static String placeid;
	 
	
	@Given("Add place payload for {string} {string} {string}")
	public void add_place_payload_for(String name, String Number, String address) throws IOException {
		addData = new data();
		//RestAssured.baseURI= "https://rahulshettyacademy.com";
		
		addreq= given().spec(requestdata()).body(addData.addplaceapiData(name,Number,address));
	
	}
	    

	@When("user calls {string} with {string} http request")
	public void user_calls_with_http_request(String RESOURCE, String METHOD) {
		APIResources resources = APIResources.valueOf(RESOURCE);
		System.out.println(resources.getresources());
	   if(METHOD.equalsIgnoreCase("POST")) {
		 addreq1 = addreq.when().post(resources.getresources()).then().assertThat().extract().response();
	   }
	   else if(METHOD.equalsIgnoreCase("get")) {
		   addreq1 = addreq.when().get(resources.getresources()).then().assertThat().extract().response();
	   }
	   else if(METHOD.equalsIgnoreCase("PUT")) {
		   addreq1 = addreq.when().put(resources.getresources()).then().assertThat().extract().response();
	   }
		js = new JsonPath(addreq1.asString());
		placeid = js.get("place_id");
      String Address = js.get("address");
	       
	}

	@Then("Add API is added sucessfully with success status code {int}")
	public void add_API_is_added_sucessfully_with_success_status_code(Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(addreq1.getStatusCode(), 200);
	}

	
	@Then("{string} in response body is {string}")
	public void in_response_body_is(String actualval, String EXpectedval) {
	    assertEquals(js.get(actualval).toString(),EXpectedval );
	    
	}
	
	@And("verify mapped {string} from addplace is same in {string}")
	public void verify_mapped_from_addplace_is_same_in(String value, String resource) throws IOException {
	    // Write code here that turns the phrase above into concrete actions
		p_id = jsonpath(addreq1, "place_id");
		addreq = given().spec(requestdata()).queryParam("place_id",p_id );
	    user_calls_with_http_request(resource, "GET"); 
	   String name =  jsonpath(addreq1, "name");
	   System.out.println(name);
	    assertEquals(name,value );
	    address =  jsonpath(addreq1, "address");
	    
	}
	
	@Given("Add Update payload")
	public void add_update_payload() throws IOException {
	    // Write code here that turns the phrase above into concrete actions
		addreq= given().spec(requestdata()).body(data.update(p_id, address));
	}

	
	
	@Given("Add Delete payload")
	public void add_delete_payload() throws IOException {
//		String address = jsonpath(addreq1 , "address");
//		String placeid =	jsonpath(addreq1, "place_id");
		
		
		addreq = given().spec(requestdata()).body(data.delete(p_id));
	     
		
	}




}
