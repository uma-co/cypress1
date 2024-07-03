package resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class utils {
	static RequestSpecification req;

public RequestSpecification requestdata() throws IOException {
		if(req==null) {
		PrintStream stream = new PrintStream(new FileOutputStream("logging.txt"));
	   req = new RequestSpecBuilder().setBaseUri(GlobalPropData("baseUrl")).addQueryParam("key", "qaclick123")
				.addFilter(RequestLoggingFilter.logRequestTo(stream))
				.addFilter(ResponseLoggingFilter.logResponseTo(stream)).build();
		return req;
	}
		return req;
	}
	
	public static String GlobalPropData(String key) throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream("/home/umaraaj1999gmai/eclipse-workspace/ApiFramework/src/test/java/resources/Globalprop.properties");
		prop.load(fis);
		return prop.getProperty(key);
		
	}
	public String jsonpath(Response response , String value) {
		String key = response.asString();
		JsonPath js = new JsonPath(key);
		return js.get(value).toString();
		
	}

}
