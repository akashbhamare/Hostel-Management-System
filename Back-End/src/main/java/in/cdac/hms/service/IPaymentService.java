package in.cdac.hms.service;

import java.util.List;

import in.cdac.hms.dto.PaymentDto;

public interface IPaymentService {
	List<PaymentDto> getTransactions();
}
