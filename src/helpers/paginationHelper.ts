type IOptions = {
    page: number;
    limit: number;
    sortBy: string;
    sortOrder: string;
}
type IOptionsResult = {
    page: number;
    skip: number;
    limit: number;
    sortBy: string;
    sortOrder: string;
}

const calculatePagination = (options: IOptions): IOptionsResult => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 10);
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || "createdAt";
    const sortOrder = options.sortOrder || "desc";

    return {
        limit,
        page,
        skip,
        sortBy,
        sortOrder
    }
}

export const paginationHelper = {
    calculatePagination
}