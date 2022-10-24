package in.cdac.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.cdac.hms.model.Payment;
import in.cdac.hms.model.Student;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
	Payment findById(long id);
	Payment findByStudent(Student student);
}
