import { z } from "zod";

export const produtoValidation = z.object({
  nome_produto: z.string(),
  quantidade: z.number(),
  valor: z.float(),
});
