package in.cdac.hms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import in.cdac.hms.dto.PaymentDto;
import in.cdac.hms.model.Payment;
import in.cdac.hms.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements IPaymentService {
	
	private PaymentRepository paymentRepository;	

	public PaymentServiceImpl(PaymentRepository paymentRepository) {
		this.paymentRepository = paymentRepository;
	}

	@Override
	public List<PaymentDto> getTransactions() {
		List<Payment> payments = paymentRepository.findAll();
		return payments.stream().map((payment) -> mapToPaymentDto(payment)).collect(Collectors.toList());
	}
	
	private PaymentDto mapToPaymentDto(Payment payment) {
		PaymentDto paymentDto = new PaymentDto();
		paymentDto.setId(payment.getId());
		paymentDto.setTransactionId(payment.getTransactionId());
		paymentDto.setStudentName(payment.getStudent().getUser().getFirstName());
		paymentDto.setHostelName(payment.getStudent().getRoom().getHostel().getName());
		paymentDto.setRoomNo(payment.getStudent().getRoom().getRoomNo());
		paymentDto.setTransactionDate(payment.getTransactionDate());
		paymentDto.setTransactionStatus(payment.getTransactionStatus());
		System.out.println(paymentDto);
		return paymentDto;
	}
	
//	@Override
//	public List<PaymentDto> displayPayments() {
//		List<Payment> payments =  paymentRepository.findAll();
//		return payments.stream().map((payment) -> mapToPaymentDto(payment)).collect(Collectors.toList());
//	}
}
