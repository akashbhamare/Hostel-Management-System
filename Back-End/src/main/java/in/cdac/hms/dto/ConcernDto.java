package in.cdac.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ConcernDto {		
	private long id;
	private String subject;
	private String message;
	private String studentName;
	private String hostelName;
	private int roomNo;
}
