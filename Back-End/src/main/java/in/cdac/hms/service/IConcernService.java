package in.cdac.hms.service;

import java.util.List;

import in.cdac.hms.dto.ConcernDto;

public interface IConcernService {
	void addConcern(ConcernDto concernDto);
	List<ConcernDto> displayConcerns();
}
