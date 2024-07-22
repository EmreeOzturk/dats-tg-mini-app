import { Prisma } from "@prisma/client";

export type User = Omit<
  Prisma.UserCreateInput,
  "id" | "createdAt" | "updatedAt" | "completedMissions"
>;

export type ConnectionResponseData = {
  downloadSpeed: number;
  uploadSpeed: number;
  downloaded: number;
  uploaded: number;
  latency: number;
  bufferBloat: number;
  userLocation: string;
  userIp: string;
};
