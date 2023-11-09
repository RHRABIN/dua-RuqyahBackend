import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
const createCategory = async (category: Category): Promise<Category> => {
    const result = await prisma.category.create({ data: category });

    return result;
};

const getAllCategory = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany();
    return result;
};
const getCategory = async (id: number): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateCategory = async (id: number, payload: Category): Promise<Category | null> => {
    const result = await prisma.category.update({
        where: { id },
        data: payload,
    });
    return result;
};
const deleteCategory = async (id: number): Promise<Category | null> => {
    const result = await prisma.category.delete({
        where: {
            id,
        },
    });
    return result;
};

export const CategoryService = {
    getAllCategory,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
};
