package in.cdac.hms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import in.cdac.hms.dto.RoomDto;
import in.cdac.hms.model.Hostel;
import in.cdac.hms.model.Room;
import in.cdac.hms.repository.HostelRepository;
import in.cdac.hms.repository.RoomRepository;

@Service
public class RoomServiceImpl implements IRoomService {

	private HostelRepository hostelRepository;
	private RoomRepository roomRepository;

	public RoomServiceImpl(HostelRepository hostelRepository, RoomRepository roomRepsitory) {
		this.hostelRepository = hostelRepository;
		this.roomRepository = roomRepsitory;
	}

	@Override
	public void addRoomToHostel(RoomDto roomDto) throws Exception {
		Room room = new Room();
		System.out.println(hostelRepository.findById(roomDto.getHostelId()));
		Hostel hostel = hostelRepository.findById(roomDto.getHostelId());
		if (hostel != null) {
			room.setHostel(hostel);
			room.setRoomNo(roomDto.getRoomNo());
			roomRepository.save(room);
		}else {
			throw new Exception("Hostel is not available");
		}
	}

	@Override
	public List<RoomDto> displayRooms(long hostelId) {
		Hostel hostel = hostelRepository.findById(hostelId);
		List<Room> rooms = roomRepository.findByHostel(hostel);
		return rooms.stream().map((room) -> mapToRoomDto(room)).collect(Collectors.toList());
	}

	private RoomDto mapToRoomDto(Room room) {
		String isVacant;
		RoomDto roomDto = new RoomDto();
		roomDto.setId(room.getId());
		roomDto.setHostelId(room.getHostel().getId());
		roomDto.setHostelName(room.getHostel().getName());
		roomDto.setRoomNo(room.getRoomNo());
		System.out.println(room.getIsVacant());
		if (room.getIsVacant() == 1)
			isVacant = "Vacant";
		else
			isVacant = "Not Vacant";
		roomDto.setIsVacant(isVacant);
		return roomDto;
	}

	@Override
	public void updateRoom(RoomDto roomDto) {
		Room room = roomRepository.findById(roomDto.getId());
		System.out.println(roomDto.getRoomNo());
		room.setRoomNo(roomDto.getRoomNo());
//		room.setHostel(hostelRepository.findById(roomDto.getHostelId()));
		roomRepository.save(room);
	}

	@Override
	public void deleteRoom(RoomDto roomDto) {
		Room room = roomRepository.findById(roomDto.getId());
		room.setHostel(null);
		room.setStudent(null);
		roomRepository.delete(room);
	}

}
