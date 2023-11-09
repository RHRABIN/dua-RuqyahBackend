import { Data } from '@prisma/client';
import prisma from '../../../shared/prisma';
const createData = async (data: Data): Promise<Data> => {
    const result = await prisma.data.create({ data });

    return result;
};

const getAllData = async (): Promise<Data[]> => {
    const result = await prisma.data.findMany();
    return result;
};
const getData = async (id: number): Promise<Data | null> => {
    const result = await prisma.data.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateData = async (id: number, payload: Data): Promise<Data | null> => {
    const result = await prisma.data.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteData = async (id: number): Promise<Data | null> => {
    const result = await prisma.data.delete({
        where: {
            id,
        },
    });
    return result;
};

export const DataService = {
    getAllData,
    createData,
    getData,
    updateData,
    deleteData,
};
