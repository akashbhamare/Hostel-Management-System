package in.cdac.hms.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.cdac.hms.dto.AdminDto;
import in.cdac.hms.dto.ConcernDto;
import in.cdac.hms.dto.HostelDto;
import in.cdac.hms.dto.PaymentDto;
import in.cdac.hms.dto.RoomDto;
import in.cdac.hms.dto.StudentDto;
import in.cdac.hms.dto.UserDto;
import in.cdac.hms.payload.ApiResponse;
import in.cdac.hms.service.AdminServiceImpl;
import in.cdac.hms.service.ConcernServiceImpl;
import in.cdac.hms.service.HostelServiceImpl;
import in.cdac.hms.service.PaymentServiceImpl;
import in.cdac.hms.service.RoomServiceImpl;
import in.cdac.hms.service.StudentServiceImpl;
import in.cdac.hms.service.UserServiceImpl;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/admin")
public class AdminController {
	
	private HostelServiceImpl hostelServiceImpl;
	private ConcernServiceImpl concernServiceImpl;
	private AdminServiceImpl adminServiceImpl;
	private StudentServiceImpl studentServiceImpl;
	private RoomServiceImpl roomServiceImpl;	
	private UserServiceImpl userServiceImpl;
	private PaymentServiceImpl paymentServiceImpl;
	
	public AdminController(
			HostelServiceImpl hostelServiceImpl,
			ConcernServiceImpl concernServiceImpl,			
			AdminServiceImpl adminServiceImpl,
			StudentServiceImpl studentServiceImpl,
			RoomServiceImpl roomServiceImpl,
			UserServiceImpl userServiceImpl,
			PaymentServiceImpl paymentServiceImpl
			) {		
		this.hostelServiceImpl = hostelServiceImpl;
		this.concernServiceImpl = concernServiceImpl;
		this.adminServiceImpl = adminServiceImpl;
		this.studentServiceImpl = studentServiceImpl;
		this.roomServiceImpl = roomServiceImpl;
		this.userServiceImpl = userServiceImpl;
		this.paymentServiceImpl = paymentServiceImpl;
	}

	@GetMapping("/students/display")
    public ResponseEntity<List<StudentDto>> getAllUsers() {
    	return ResponseEntity.ok().body(studentServiceImpl.displayStudents()); 
    }
	
	@PostMapping("/hostel/add")
    public ResponseEntity<?> addHostel(@RequestBody HostelDto hostelDto) {
		hostelServiceImpl.addHostel(hostelDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Hostel added successfully")); 
    }
	
	@PutMapping("/hostel/update")
    public ResponseEntity<?> updateHostel(@RequestBody HostelDto hostelDto) throws Exception {
		hostelServiceImpl.updateHostel(hostelDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Hostel updated successfully")); 
    }
	
	@GetMapping("/hostels/display")
    public ResponseEntity<List<HostelDto>> displayHostels() {		
    	return ResponseEntity.ok().body(hostelServiceImpl.displayHostels()); 
    }
	
	@GetMapping("/hostel/view")
    public ResponseEntity<HostelDto> viewHostel(@RequestParam long id) {		
    	return ResponseEntity.ok().body(hostelServiceImpl.viewHostel(id)); 
    }
	
	@DeleteMapping("/hostel/delete")
    public ResponseEntity<?> deleteHostel(@RequestBody HostelDto hostelDto) {
		hostelServiceImpl.deleteHostel(hostelDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Hostel deleted successfully")); 
    }
	
	@PostMapping("/room/add")
    public ResponseEntity<?> addRoom(@RequestBody RoomDto roomDto) throws Exception {
		roomServiceImpl.addRoomToHostel(roomDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Room added successfully")); 
    }
	
	@GetMapping("/rooms/display")
    public ResponseEntity<List<RoomDto>> displayRooms(@RequestParam long hostelId) {
		System.out.println(hostelId);
    	return ResponseEntity.ok().body(roomServiceImpl.displayRooms(hostelId)); 
    }
	
	@PutMapping("/room/update")
    public ResponseEntity<?> updateRoom(@RequestBody RoomDto roomDto) {
		roomServiceImpl.updateRoom(roomDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Room updated successfully")); 
    }
	
	@DeleteMapping("/room/delete")
    public ResponseEntity<?> deleteRoom(@RequestBody RoomDto roomDto) {
		roomServiceImpl.deleteRoom(roomDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Room deleted successfully")); 
    }
	
	@GetMapping("/concerns/display")
	public ResponseEntity<List<ConcernDto>> displayConcerns() {			
    	return ResponseEntity.ok().body(concernServiceImpl.displayConcerns()); 
    }	
	
	@GetMapping("/view")
	public ResponseEntity<AdminDto> viewAdmin() {			
    	return ResponseEntity.ok().body(adminServiceImpl.viewAdmin()); 
    }	
	//for backend testing only
	@PutMapping("/add")
	public ResponseEntity<?> addAdmin(@RequestBody AdminDto adminDto) {	
		adminServiceImpl.addAdmin(adminDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Admin registered successfully")); 
    }
	
	@GetMapping("/update")
	public ResponseEntity<UserDto> getUser() {
		return ResponseEntity.ok().body(userServiceImpl.getUser());	
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateAdmin(@RequestBody AdminDto adminDto) {	
		adminServiceImpl.updateAdmin(adminDto);
    	return ResponseEntity.ok().body(new ApiResponse(true, "Updated Admin successfully")); 
    }
	
	@GetMapping("/payment/display")
    public ResponseEntity<List<PaymentDto>> getTransactions() {		
    	return ResponseEntity.ok().body(paymentServiceImpl.getTransactions()); 
    }
	
}
