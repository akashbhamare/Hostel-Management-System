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
public class PaymentDto {		
	private long id;
	private String transactionId;
	private String studentName;
	private String hostelName;
	private int roomNo;
	private String transactionStatus;
	private Date transactionDate;	
}
