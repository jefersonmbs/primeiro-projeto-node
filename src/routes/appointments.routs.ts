import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointments from '../models/Appointement';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  if (appointmentRepository.findByDate(parsedDate)) {
    return response.status(400).json({ error: 'Date ocuped.' });
  }
  const appointment = appointmentRepository.create(provider, parsedDate);

  return response.json(appointment);
});

appointmentsRouter.get('/', (request, response) => {
  return response.json(appointmentRepository.list());
});

export default appointmentsRouter;
