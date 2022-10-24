package in.cdac.hms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import in.cdac.hms.dto.HostelDto;
import in.cdac.hms.model.Hostel;
import in.cdac.hms.repository.HostelRepository;

@Service
public class HostelServiceImpl implements IHostelService {	
	
	private HostelRepository hostelRepository;	

	public HostelServiceImpl(HostelRepository hostelRepository) {
		super();
		this.hostelRepository = hostelRepository;
	}

	@Override
	public void addHostel(HostelDto hostelDto) {
		Hostel hostel = new Hostel();
		hostel.setName(hostelDto.getName());
		hostel.setContactPerson(hostelDto.getContactPerson());
		hostel.setContactMobileNo(hostelDto.getContactMobileNo());
		hostel.setAddress(hostelDto.getAddress());
		hostel.setHostelFees(hostelDto.getHostelFees());		
		hostelRepository.save(hostel);
	}

	@Override
	public List<HostelDto> displayHostels() {
		List<Hostel> hostels =  hostelRepository.findAll();
		return hostels.stream().map((hostel) -> mapToHostelDto(hostel)).collect(Collectors.toList());
	}
	
	private HostelDto mapToHostelDto(Hostel hostel) {
		HostelDto hostelDto = new HostelDto();
		hostelDto.setId(hostel.getId());
		hostelDto.setName(hostel.getName());
		hostelDto.setContactPerson(hostel.getContactPerson());
		hostelDto.setContactMobileNo(hostel.getContactMobileNo());
		hostelDto.setAddress(hostel.getAddress());
		hostelDto.setHostelFees(hostel.getHostelFees());		
		try {
			hostelDto.setTotalRooms(hostel.getRooms().size());
		} catch (NullPointerException e) {
			hostelDto.setTotalRooms(0);
		}
		
		return hostelDto;
	}
	
	@Override
	public void updateHostel(HostelDto hostelDto) throws Exception {
		System.out.println(hostelDto.getHostelFees());
		Hostel hostel = hostelRepository.findById(hostelDto.getId());
		hostel.setName(hostelDto.getName());
		hostel.setContactPerson(hostelDto.getContactPerson());
		hostel.setContactMobileNo(hostelDto.getContactMobileNo());
		hostel.setAddress(hostelDto.getAddress());
		hostel.setHostelFees(hostelDto.getHostelFees());
		hostelRepository.save(hostel);		
	}

	@Override
	public HostelDto viewHostel(long id) {
		Hostel hostel = hostelRepository.findById(id);
		HostelDto hostelDto = new HostelDto();
		hostelDto.setId(hostel.getId());
		hostelDto.setName(hostel.getName());
		hostelDto.setContactPerson(hostel.getContactPerson());
		hostelDto.setContactMobileNo(hostel.getContactMobileNo());
		hostelDto.setAddress(hostel.getAddress());
		hostelDto.setHostelFees(hostel.getHostelFees());		
		try {
			hostelDto.setTotalRooms(hostel.getRooms().size());
		} catch (NullPointerException e) {
			hostelDto.setTotalRooms(0);
		}
		
		return hostelDto;
	}

	@Override
	public void deleteHostel(HostelDto hostelDto) {
		Hostel hostel = hostelRepository.findById(hostelDto.getId());
		hostelRepository.delete(hostel);
	}
		


}
