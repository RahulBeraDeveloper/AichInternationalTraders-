import { env } from '@/config/env';

/** Minimal typed fetch wrapper. Every future API service should go through this. */
export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${env.apiBaseUrl}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) throw new HttpError(res.status, res.statusText);
  return (await res.json()) as T;
}
