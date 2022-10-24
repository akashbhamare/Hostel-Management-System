package in.cdac.hms.dto;


import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {	
	private long id;
	private String firstName;
	private String lastName;	
	private String userName;	
	private String emailId;	
	private long mobileNo;		
	private String course;
	private Date dateOfBirth;	
	private String gender;	
	private String address;	
	private int roomNo;
	private String hostelName;
}
