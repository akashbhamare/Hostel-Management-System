package in.cdac.hms.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;	
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "email_id", unique = true)
	private String emailId;
	
	@Column(name = "mobile_no", unique = true)
	private Long mobileNo;	
	
	private String course;
	
	@Column(name = "date_of_birth")	
	private Date dateOfBirth;
	
	private String gender;
	
	private String address;		
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "room_id")
	private Room room;
	
//	@OneToOne(cascade = CascadeType.ALL, mappedBy = "student")
//	private Payment payment;
}
