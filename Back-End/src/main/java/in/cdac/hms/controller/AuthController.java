package in.cdac.hms.controller;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import in.cdac.hms.model.Role;
import in.cdac.hms.model.User;
import in.cdac.hms.payload.ApiResponse;
import in.cdac.hms.payload.JwtAuthenticationResponse;
import in.cdac.hms.payload.LoginRequest;
import in.cdac.hms.payload.SignUpRequest;
import in.cdac.hms.repository.UserRepository;
import in.cdac.hms.security.JwtUtil;
import in.cdac.hms.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {   
	
	
	private JwtUtil jwtUtil;	
	private AuthenticationManager authenticationManager; 	
    private UserServiceImpl userServiceImpl;	
	private UserRepository userRepository; 		

	public AuthController(
			JwtUtil jwtUtil,
			AuthenticationManager authenticationManager,
			UserServiceImpl userServiceImpl,
			UserRepository userRepository
			) {		
		this.jwtUtil = jwtUtil;
		this.authenticationManager = authenticationManager;
		this.userServiceImpl = userServiceImpl;
		this.userRepository = userRepository;
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateStudent(@RequestBody LoginRequest loginRequest) throws Exception {
		System.out.println(loginRequest);
		String jwt = null;
		List<String> roleNames = null;
		try {
			authenticationManager.authenticate(
			        new UsernamePasswordAuthenticationToken(
			                loginRequest.getUserName(),
			                loginRequest.getPassword()
			        )
			);
			jwt =  jwtUtil.generateToken(loginRequest.getUserName());

			User user;
			try {
				user = userRepository.findByUserName(loginRequest.getUserName());
				System.out.println(user);
				roleNames = user.getRoles().stream().map((role) -> mapToRoleNames(role)).collect(Collectors.toList());

			} catch (Exception e) {
				roleNames = null;
			}
			System.out.println(roleNames);
			return ResponseEntity.ok(new JwtAuthenticationResponse(jwt,roleNames));

		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().body(new JwtAuthenticationResponse(jwt,roleNames));		}

	}
	
    private String mapToRoleNames(Role role) {    	
		return role.getName();
	}

	@PostMapping("/signup")
    public ResponseEntity<?> saveUser(@RequestBody SignUpRequest signUpRequest) {
    	System.out.println(signUpRequest);
    	if (userRepository.existsByUserName(signUpRequest.getUserName())) {
			return ResponseEntity
					.badRequest()
					.body(new ApiResponse(false,"Username is already taken!"));
		}
    	userServiceImpl.saveUser(signUpRequest);
    	URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/signup").toUriString());
    	return ResponseEntity.created(uri).body(new ApiResponse(true,"User registered successfully!"));
    }
}
