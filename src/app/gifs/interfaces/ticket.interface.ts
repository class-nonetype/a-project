import type { UUID } from './types';



/** nivel de prioridad del ticket */
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';


/** estado del flujo del trabajo del ticket */
export type TicketStatus =
  | 'open'
  | 'in_progress'
  | 'on_hold'
  | 'resolved'
  | 'closed'
  | 'cancelled';


/** clasificación funcional del ticket */
export type TicketType = 'bug' | 'feature' | 'task' | 'incident' | 'question' | 'support';


/** tipo de relación entre tickets (para dependencias y duplicados) */
export type TicketLinkType =
  | 'duplicates'
  | 'is_duplicated_by'
  | 'blocks'
  | 'is_blocked_by'
  | 'relates_to'
  | 'causes'
  | 'caused_by';


/** referencia al usuario/equipo (evita cargar el objeto completo) */
export interface UserReference {
  id: UUID;
  displayName: string;
  email?: string | null;
  avatarUrl?: string | null;
}

export interface TeamReference {
  id: UUID;
  name: string;
}

/** SLA asociado al ticket (fechas ISO 8601) */
export interface SLAInfo {
  policyId: UUID;
  firstResponseDueAt?: string; // ISO
  resolutionDueAt?: string;    // ISO
  breached?: boolean;
}



/** Archivo adjunto publicado en el ticket */
export interface TicketAttachment {
  id: UUID;
  fileName: string;
  contentType: string;
  sizeBytes: number;
  url: string;
  uploadedAt: string; // ISO
  uploadedBy: UserReference;
}

/** Comentario en el hilo del ticket */
export interface TicketComment {
  id: UUID;
  body: string;
  author: UserReference;
  createdAt: string;  // ISO
  updatedAt?: string; // ISO
  internal?: boolean; // true = comentario interno (no visible al solicitante)
  attachments?: TicketAttachment[];
}


/** Relación con otro ticket (dependencias/duplicados) */
export interface TicketLink {
  type: TicketLinkType;
  ticketId: UUID;
}

/** Representación principal del ticket (DTO de lectura) */
export interface Ticket {
  id: UUID;
  code: string;                 // ejemplo: "TCK-1023"
  title: string;
  description?: string;

  status: TicketStatus;
  priority: TicketPriority;
  type: TicketType;

  requester: UserReference;           // quien reporta/solicita
  assignee?: UserReference;           // asignado actual
  assigneeTeam?: TeamReference;       // equipo responsable
  watchers?: UserReference[];         // seguidores del ticket

  tags?: string[];
  source?: 'portal' | 'email' | 'api' | 'chat' | 'phone';
  channelRef?: string | null;   // id de conversación/chat/email

  sla?: SLAInfo;
  attachments?: TicketAttachment[];
  comments?: TicketComment[];
  links?: TicketLink[];

  customFields?: Record<string, unknown>; // extensiones por cliente/proyecto

  organizationId?: UUID;
  projectId?: UUID;
  categoryId?: UUID;

  dueAt?: string;       // ISO
  resolvedAt?: string;  // ISO
  closedAt?: string;    // ISO
  createdAt: string;    // ISO
  updatedAt: string;    // ISO
}

/** Payload mínimo para crear un ticket (request de creación) */
export interface TicketCreate {
  title: string;
  description?: string;
  type: TicketType;
  priority?: TicketPriority;
  requesterId: UUID;
  assigneeId?: UUID;
  assigneeTeamId?: UUID;
  tags?: string[];
  source?: 'portal' | 'email' | 'api' | 'chat' | 'phone';
  dueAt?: string; // ISO
  customFields?: Record<string, unknown>;
}

/** Payload de actualización parcial del ticket (PATCH) */
export interface TicketUpdate {
  title?: string;
  description?: string;
  status?: TicketStatus;
  priority?: TicketPriority;
  type?: TicketType;
  assigneeId?: UUID | null;      // null para desasignar
  assigneeTeamId?: UUID | null;
  tags?: string[];
  dueAt?: string | null;         // ISO o null para limpiar
  resolvedAt?: string | null;    // set al resolver
  closedAt?: string | null;      // set al cerrar
  customFields?: Record<string, unknown>;
}



export interface TicketCounter {
  totalTickets: number;
}
