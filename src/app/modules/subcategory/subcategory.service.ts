/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma';
import { IGenericResponse } from '../../../interfaces/common';
import { Subcatgory } from '@prisma/client';
import { ISubcategoryFilters } from './subcategory.const';
const createSubcategory = async (data: Subcatgory): Promise<Subcatgory> => {
    const result = await prisma.subcatgory.create({ data });

    return result;
};

const getAllSubcategory = async (filters: ISubcategoryFilters): Promise<IGenericResponse<Subcatgory[]>> => {

    const { ...filterData } = filters;
    const andConditions = [];

    if (filterData.cat_id) andConditions.push({
        cat_id: {
            equals: parseInt(filterData.cat_id)
        }
    })

    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.subcatgory.findMany({
        where: whereConditions,
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
