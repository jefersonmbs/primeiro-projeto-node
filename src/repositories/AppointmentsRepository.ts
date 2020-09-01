import { isEqual } from 'date-fns';
import Appointment from '../models/Appointement';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date) {
    return this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }

  public list() {
    return this.appointments;
  }
}

export default AppointmentsRepository;
