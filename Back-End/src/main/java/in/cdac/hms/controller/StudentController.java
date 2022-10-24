package in.cdac.hms.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.cdac.hms.dto.ConcernDto;
import in.cdac.hms.dto.HostelDto;
import in.cdac.hms.dto.RoomDto;
import in.cdac.hms.dto.StudentDto;
import in.cdac.hms.dto.UserDto;
import in.cdac.hms.payload.AllotmentStatus;
import in.cdac.hms.payload.ApiResponse;
import in.cdac.hms.payload.BookingStatus;
import in.cdac.hms.service.ConcernServiceImpl;
import in.cdac.hms.service.HostelServiceImpl;
import in.cdac.hms.service.RoomServiceImpl;
import in.cdac.hms.service.StudentServiceImpl;
import in.cdac.hms.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {	
	
	private UserServiceImpl userServiceImpl;	
	private HostelServiceImpl hostelServiceImpl;	
	private ConcernServiceImpl concernServiceImpl;	
	private StudentServiceImpl studentServiceImpl; 	
	private RoomServiceImpl roomServiceImpl;
	
	public StudentController(
			UserServiceImpl userServiceImpl,
			HostelServiceImpl hostelServiceImpl,			
			ConcernServiceImpl concernServiceImpl,
			StudentServiceImpl studentServiceImpl,
			RoomServiceImpl roomServiceImpl
			) {
		this.userServiceImpl = userServiceImpl;
		this.hostelServiceImpl = hostelServiceImpl;
		this.concernServiceImpl = concernServiceImpl;
		this.studentServiceImpl = studentServiceImpl;
		this.roomServiceImpl = roomServiceImpl;
	}

	@GetMapping("/register")
	public ResponseEntity<UserDto> getUser() {
		return ResponseEntity.ok().body(userServiceImpl.getUser());	
	}
	
	@PutMapping("/register")
	public ResponseEntity<?> addStudent(@RequestBody StudentDto studentDto) {	
		studentServiceImpl.addStudent(studentDto);
		return ResponseEntity.ok().body(new ApiResponse(true,"Student registered successfully"));	
	}
	
	@GetMapping("/update")
	public ResponseEntity<UserDto> updateUser() {
		return ResponseEntity.ok().body(userServiceImpl.getUser());	
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateStudent(@RequestBody StudentDto studentDto) {	
		studentServiceImpl.updateStudent(studentDto);
		return ResponseEntity.ok().body(new ApiResponse(true,"Student updated successfully"));	
	}
	
	@GetMapping("/hostels/display")
	public ResponseEntity<List<HostelDto>> displayHostels() {		
    	return ResponseEntity.ok().body(hostelServiceImpl.displayHostels()); 
    }
	
	@GetMapping("/rooms/display")
    public ResponseEntity<List<RoomDto>> displayRooms(@RequestParam long hostelId) {
		System.out.println(hostelId);
    	return ResponseEntity.ok().body(roomServiceImpl.displayRooms(hostelId)); 
    }
	
	@PostMapping("/concern/add")
	public ResponseEntity<?> addConcern(@RequestBody ConcernDto concernDto) {	
		concernServiceImpl.addConcern(concernDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Concern posted successfully")); 
    }
	
	@PostMapping("/book")
	public ResponseEntity<?> bookRoom(@RequestBody BookingStatus bookingStatus) {
		System.out.println(bookingStatus);
		if(studentServiceImpl.bookRoom(bookingStatus))
    		return ResponseEntity.ok().body(new ApiResponse(true, "Payment is successful")); 
    	else
    		return ResponseEntity.ok().body(new ApiResponse(false, "Failed to make Payment"));
    }
	
	@GetMapping("/allottment")
	public ResponseEntity<AllotmentStatus> getAllotmentStatus() {		
    	return ResponseEntity.ok().body(studentServiceImpl.getAllotmentStatus()); 
    }
	
	@GetMapping("/view")
	public ResponseEntity<StudentDto> getStudent() {		
		return ResponseEntity.ok().body(studentServiceImpl.viewStudent());	
	}


}
