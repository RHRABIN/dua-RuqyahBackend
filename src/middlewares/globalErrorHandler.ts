/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Something wend wrong!";
    let errorMessages = [];

    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        message = error?.message
        statusCode = 400;
        errorMessages = []
    }
    else if (error instanceof Error) {
        statusCode = 400;
        message = error?.message;
        errorMessages = error?.message ? [
            {
                path: "",
                message: error?.message
            }
        ] : [];
    }


    res.status(403).json({
        success: false,
        message: "Forbidden",
        errorMessages: [{
            message: error
        }]
    })
}