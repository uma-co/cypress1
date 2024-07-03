package hOOKS;

import java.io.IOException;

import StepDefinition.stepDefinition;
import io.cucumber.java.Before;

public class Updateapi {
      @Before("@UpdatePlace")
    public void place_id() throws IOException {
    	stepDefinition stepDefinition = new stepDefinition();
    	if(stepDefinition.p_id == null) {
    	stepDefinition.add_place_payload_for("kumz", "lapetai", "493457349t");
    	stepDefinition.user_calls_with_http_request("ADDAPI", "post");
    	stepDefinition.verify_mapped_from_addplace_is_same_in("kumz", "GETAPI");
    	}
    }
}
