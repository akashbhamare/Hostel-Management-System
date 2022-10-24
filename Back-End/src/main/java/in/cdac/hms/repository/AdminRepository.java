package in.cdac.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.cdac.hms.model.Admin;
import in.cdac.hms.model.User;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	Admin findByUser(User user);	
}

