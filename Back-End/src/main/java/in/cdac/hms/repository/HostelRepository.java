package in.cdac.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.cdac.hms.model.Hostel;

public interface HostelRepository extends JpaRepository<Hostel, Long> {
	Hostel findById(long id);
}
