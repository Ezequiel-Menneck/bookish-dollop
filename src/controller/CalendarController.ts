import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaCliente';
import { calendarValidator } from '../validators/CallendarValidator';

type CreateSchedule = {
  client: string;
  gender: string;
  date: string;
  time: string;
};

type ServiceTypes = {
  service_name: string;
  price: number;
};

export const addSchedule = async (req: Request, res: Response) => {
  const { client, gender, date, time }: CreateSchedule = req.body;
  const { service_name, price }: ServiceTypes = req.body.service.create;

  const { error } = calendarValidator.validate(req.body);
  const valid = error == null;

  if (valid) {
    console.log('Valido');
    const schedule = await prismaClient.schedules.create({
      data: {
        client,
        gender,
        date,
        time,
        service: {
          create: {
            service_name,
            price,
          },
        },
      },
      include: { service: true },
    });

    return res.status(201).json(schedule);
  } else {
    console.log('Invalido');
    const { details } = error;
    //@ts-ignore
    const message = details.map(i => i.message).join(',');

    return res.status(422).json({ error: message });
  }
};

export const getAllSchedules = async (req: Request, res: Response) => {
  const allSchedueles = await prismaClient.schedules.findMany({
    include: { service: true },
  });

  res.status(200).send(allSchedueles);
};

export const updateSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { client, gender, date, time }: CreateSchedule = req.body;
  const { service_name, price }: ServiceTypes = req.body.service.create;

  const { error } = calendarValidator.validate(req.body);
  const valid = error == null;

  if (valid) {
    const newSchedule = await prismaClient.schedules.update({
      where: { id },
      data: {
        client,
        gender,
        date,
        time,
        service: {
          create: {
            service_name,
            price,
          },
        },
      },
    });

    return res.status(200).json(newSchedule);
  } else {
    console.log('Invalido');
    const { details } = error;
    //@ts-ignore
    const message = details.map(i => i.message).join(',');

    return res.status(422).json({ error: message });
  }
};

export const deleteSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prismaClient.schedules.delete({
    where: { id },
  });

  return res.status(200).send({
    message: 'Schedule deletada com sucesso',
  });
};
