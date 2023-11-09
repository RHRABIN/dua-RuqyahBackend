import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
import { Subcatgory } from '@prisma/client';
const createSubcategory = async (data: Subcatgory): Promise<Subcatgory> => {
    const result = await prisma.subcatgory.create({ data });

    return result;
};

const getAllSubcategory = async (): Promise<IGenericResponse<Subcatgory[]>> => {
    const result = await prisma.subcatgory.findMany({
        // take: 2,
        // skip: 1,
        where: {},
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
const getSubcategory = async (id: number): Promise<Subcatgory | null> => {
    const result = await prisma.subcatgory.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateSubcategory = async (id: number, payload: Subcatgory): Promise<Subcatgory | null> => {
    const result = await prisma.subcatgory.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteSubcategory = async (id: number): Promise<Subcatgory | null> => {
    const result = await prisma.subcatgory.delete({
        where: {
            id,
        },
    });
    return result;
};

export const SubcategoryService = {
    getAllSubcategory,
    createSubcategory,
    getSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
