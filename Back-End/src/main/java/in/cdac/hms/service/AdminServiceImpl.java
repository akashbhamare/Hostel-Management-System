package in.cdac.hms.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import in.cdac.hms.dto.AdminDto;
import in.cdac.hms.model.Admin;
import in.cdac.hms.model.User;
import in.cdac.hms.repository.AdminRepository;
import in.cdac.hms.repository.UserRepository;

@Service
public class AdminServiceImpl implements IAdminService {	
	
	private AdminRepository adminRepository;
	private UserRepository userRepository;	

	public AdminServiceImpl(AdminRepository adminRepository, UserRepository userRepository) {
		this.adminRepository = adminRepository;
		this.userRepository = userRepository;
	}

	@Override
	public AdminDto viewAdmin() {
		String userName = ((UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
		AdminDto adminDto = new AdminDto();
		User user = userRepository.findByUserName(userName);
		System.out.println(user);
		Admin admin = adminRepository.findByUser(user);
		System.out.println(admin);
		adminDto.setFirstName(admin.getUser().getFirstName());
		adminDto.setLastName(admin.getUser().getLastName());
		adminDto.setUserName(admin.getUser().getUserName());
		adminDto.setEmpId(admin.getEmpId());
		adminDto.setDepartment(admin.getDepartment());
		adminDto.setEmailId(admin.getEmailId());
		adminDto.setMobileNo(admin.getMobileNo());
		adminDto.setDesignation(admin.getDesignation());
		return adminDto;
	}
	
	@Override
	public void addAdmin(AdminDto adminDto) {
		Admin admin = new Admin();
		User user = userRepository.findByUserName(adminDto.getUserName());
		admin.setUser(user);
		admin.setEmpId(adminDto.getEmailId());
		admin.setDepartment(adminDto.getDepartment());
		admin.setDesignation(adminDto.getDesignation());
		admin.setEmailId(adminDto.getEmailId());
		admin.setMobileNo(adminDto.getMobileNo());
		adminRepository.save(admin);
	}

	@Override
	public void updateAdmin(AdminDto adminDto) {		
		User user = userRepository.findByUserName(adminDto.getUserName());
		Admin admin = adminRepository.findByUser(user);
		admin.setDepartment(adminDto.getDepartment());
		admin.setDesignation(adminDto.getDesignation());
		admin.setEmailId(adminDto.getEmailId());
		admin.setMobileNo(adminDto.getMobileNo());
		adminRepository.save(admin);
	}

}
