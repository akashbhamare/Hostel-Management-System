package in.cdac.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.cdac.hms.model.Student;
import in.cdac.hms.model.User;

public interface StudentRepository extends JpaRepository<Student, Long>{
	Student findByUser(User user);
}
