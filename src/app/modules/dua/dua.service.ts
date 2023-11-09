import { Dua } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createDua = async (data: Dua): Promise<Dua> => {



    const result = await prisma.dua.create({ data });

    return result;
};

const getAllDua = async (): Promise<Dua[]> => {
    const result = await prisma.dua.findMany();
    return result;
};
const getDua = async (id: number): Promise<Dua | null> => {
    const result = await prisma.dua.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateDua = async (id: number, payload: Dua): Promise<Dua | null> => {
    const result = await prisma.dua.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteDua = async (id: number): Promise<Dua | null> => {
    const result = await prisma.dua.delete({
        where: {
            id,
        },
    });
    return result;
};

export const DuaService = {
    getAllDua,
    createDua,
    getDua,
    updateDua,
    deleteDua,
};
