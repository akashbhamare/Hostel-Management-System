package in.cdac.hms.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HostelDto {	
	private long id;
	private String name;	
	private String contactPerson;	
	private long contactMobileNo;	
	private String address;	
	private int hostelFees;
	private int totalRooms;	
}
