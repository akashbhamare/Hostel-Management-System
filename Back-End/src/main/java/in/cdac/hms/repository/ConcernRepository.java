package in.cdac.hms.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import in.cdac.hms.model.Concern;

public interface ConcernRepository extends JpaRepository<Concern, Long> {
	Concern findById(long id);
}
