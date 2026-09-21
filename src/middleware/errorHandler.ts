import type { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ error: "Route not found" });
}

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const message = err instanceof Error ? err.message : "Unknown error";
  const status = (err as any)?.statusCode ?? 500;
  res.status(status).json({ error: message });
}
