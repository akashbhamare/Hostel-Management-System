package in.cdac.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.cdac.hms.model.Hostel;
import in.cdac.hms.model.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {
	Room findById(long id);
	List<Room> findByHostel(Hostel hostel);
}
