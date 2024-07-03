package resources;

import static io.restassured.RestAssured.given;

import java.util.ArrayList;

import pojo.addapipojo;
import pojo.location;

public class data {

	public addapipojo addplaceapiData(String name, String Number , String address) {
		addapipojo p1 = new addapipojo();
		location l = new location();
		l.setLat(38.383494);
		l.setLng(33.427362);
		p1.setLocation(l);
		p1.setAccuracy(50);
		p1.setAddress(address);
		p1.setlanguage("French-IN");
		p1.setName(name);
		p1.setPhone_number(Number);
		ArrayList <String>
		al = new ArrayList<String>();
		al.add("shoe park");
		al.add("shop");
		
		p1.settypes(al);
		p1.setWebsite("http://rahulshettyacademy.com");
		return p1;
	}
	
	
		public String delete(String placeid) {
			return "{\"place_id\":\""+placeid+"\"}";
			

	}
		
		public String update(String placeid, String address) {
			return "{\n"
					+ "\"place_id\":\""+placeid+"\",\n"
					+ "\"address\":\""+address+"\",\n"
					+ "\"key\":\"qaclick123\"\n"
					+ "}";
			

	}
		
		
	
		
	}
	
	










