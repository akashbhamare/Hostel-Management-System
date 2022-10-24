package in.cdac.hms.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
@Table(name = "hostels")
public class Hostel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(unique = true, nullable = false)
	private String name;	
	
	@Column(name = "contact_person")
	private String contactPerson;
	
	@Column(name = "contact_mobile_no")
	private long contactMobileNo;	
	
	private String address;
	
	@Column(name = "hostel_fees")	
	private int hostelFees;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "hostel")
	private List<Room> rooms = new ArrayList<>();

}
