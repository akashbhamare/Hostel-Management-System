package in.cdac.hms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDto {	
	private long id;
	private long hostelId;
	private String hostelName;
	private int roomNo;
	private String isVacant;	
}
