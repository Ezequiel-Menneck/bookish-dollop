import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaCliente';

type CreateSchedule = {
  client: string;
  gender: string;
  date: string;
  time: string;
  service: any;
};

export const addSchedule = async (req: Request, res: Response) => {
  const { client, gender, date, time }: CreateSchedule = req.body;
  const { service_name, price } = req.body.service;
  const schedule = await prismaClient.schedules.create({
    data: {
      client,
      gender,
      date,
      time,
      service: {
        create: [
          {
            service_name,
            price,
          },
        ],
      },
    },
  });

  console.log(schedule);
  return res.json(`Deu boa + ${schedule}`);
};
