package in.cdac.hms.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name = "users")
public class User {
	
	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;	
	@Column(name = "first_name", nullable = false)
	private String firstName;	
	@Column(name = "last_name" , nullable = false)
	private String lastName;	
	@Column(name = "user_name", nullable = false, unique = true)
	private String userName;
	@Column(nullable = false)
	private String password;	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(
			name = "users_roles",
			joinColumns = @JoinColumn( name = "user_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn( name = "role_id", referencedColumnName = "id")
			)
	private Collection<Role> roles;	
	
}
