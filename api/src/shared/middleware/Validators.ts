import { z } from "zod";

export const Validator = {
    bodyPropsValidator: z.object({
        title: z.string().default("Untitle"),
        body: z.string().min(5),
        isComplete: z.boolean().optional(),
        completeDate: z.string().max(20).optional()
    }),

    paramsPropsValidator: z.object({
        id: z.number().int().min(1).optional()
    }),

    queryPropsValidator: z.object({
        id: z.number().int().min(1).optional(),
        page: z.number().int().optional(),
        filter: z.string().optional(),
        limit: z.number().optional()
    })
}