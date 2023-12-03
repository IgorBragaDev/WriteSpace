import { z } from "zod";

export const insetCategorySchema = z.object({
    title: z.string().min(1, "O titulo é obrigatório"),
});
