package in.cdac.hms.service;

import in.cdac.hms.dto.UserDto;
import in.cdac.hms.payload.SignUpRequest;

public interface IUserService{	
	void saveUser(SignUpRequest signUpRequest);			
	UserDto getUser();
}
