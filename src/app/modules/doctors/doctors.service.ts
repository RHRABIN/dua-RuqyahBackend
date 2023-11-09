import { Doctors } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
const createDoctors = async (data: Doctors): Promise<Doctors> => {
    const result = await prisma.doctors.create({ data });

    return result;
};

const getAllDoctors = async (): Promise<IGenericResponse<Doctors[]>> => {
    const result = await prisma.doctors.findMany({
        // take: 2,
        // skip: 1,
        where: {
            name: {
                contains: "Dr.",
                mode: "insensitive"
            }
        },
        include: {
            specialization: true
        },


    });
    return {
        meta: {
            limit: 1,
            page: 1,
            total: 1,
        },
        data: result
    };
};
const getDoctors = async (id: number): Promise<Doctors | null> => {
    const result = await prisma.doctors.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateDoctors = async (id: number, payload: Doctors): Promise<Doctors | null> => {
    const result = await prisma.doctors.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteDoctors = async (id: number): Promise<Doctors | null> => {
    const result = await prisma.doctors.delete({
        where: {
            id,
        },
    });
    return result;
};

export const DoctorsService = {
    getAllDoctors,
    createDoctors,
    getDoctors,
    updateDoctors,
    deleteDoctors,
};
