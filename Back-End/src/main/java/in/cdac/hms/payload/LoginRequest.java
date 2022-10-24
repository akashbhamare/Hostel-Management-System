package in.cdac.hms.payload;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {	
	@NotBlank
	private String userName;
	@NotBlank
	private String password;
}
