package in.cdac.hms.service;

import in.cdac.hms.dto.AdminDto;

public interface IAdminService {	
	AdminDto viewAdmin();
	void updateAdmin(AdminDto adminDto);
	public void addAdmin(AdminDto adminDto);
}
