import { query } from "./_generated/server";

export const list = query({
  handler: async ctx => await ctx.db.query("courses").collect(),
});
