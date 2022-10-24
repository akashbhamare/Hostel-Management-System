package in.cdac.hms.service;

import java.util.List;

import in.cdac.hms.dto.StudentDto;

public interface IStudentService {	
	StudentDto viewStudent();
	List<StudentDto> displayStudents();
	void updateStudent(StudentDto studentDto);
	void deleteStudent(StudentDto studentDto);
	public void addStudent(StudentDto studentDto);
}
